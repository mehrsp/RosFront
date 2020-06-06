import { BaseComponent } from "src/app/core/base/base.component";
import { OnInit, Component, Input, Output, EventEmitter } from "@angular/core";
import { SlideShowDto } from "src/app/core/models/slides/slide-show.dto";
export class UploadSlideDto {
  public File: File[];
  public Model: SlideShowDto;
}
@Component({
  selector:     'app-slides-edit-form',
  templateUrl:  './slides-edit-form.component.html'
})
export class SlideShowEditFormComponent extends BaseComponent implements OnInit  {
  
  //#region Properties
  fileForUpload: File[] = [];

  @Output()
  onUploadImage: EventEmitter<any> = new EventEmitter();

  @Input()
  uploadedFiles: File[];

  @Input() model: SlideShowDto;

  @Input() 
  set editModel(m: SlideShowDto) { 
    this.model = m;
  }
  get editModel() { return this.model;  }

  @Output() onReturn: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor() {
    super();
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    if (this.editModel && this.editModel.Id > 0)
    {
      Object.assign(this.model, this.editModel);
    }
  }  
  //#endregion Lifecycle Hooks

  //#region Utilities

  //#endregion Utilities

  //#region Functions
  onSubmit(event, file) { 
      this.uploadedFiles = file.files;
      var uploadSlide = new UploadSlideDto();
      uploadSlide.File = this.uploadedFiles;
      uploadSlide.Model = this.model;

      this.uploadedFiles = [];
      this.onSave.next(uploadSlide);
  }
  onCancel() {
    this.onReturn.next(true);
  }
  //#endregion Functions
}
