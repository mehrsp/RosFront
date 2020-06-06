import { DropBoxDto } from 'src/app/core/models/base/drop-box-Dto';
import { BaseComponent } from '../../../../core/base/base.component';
import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { BrandDto } from 'src/app/core/models/brands/brand.dto';
import { SelectItem } from 'primeng/api';


@Component({
  selector:     'app-brand-edit-form',
  templateUrl:  './brand-edit-form.component.html'
})
export class BrandEditFormComponent extends BaseComponent implements OnInit  {
  
  //#region Properties
  private model: BrandDto;
  private selectedCountry: DropBoxDto;
  @Input()  countries: SelectItem[];

  @Input() 
  title: String; 
  
  @Input() 
  set editModel(m: BrandDto) { this.model = m; this.isTrue = true; 
  if(m.Id != null) {
    if(m.Country){this.selectedCountry = new DropBoxDto(m.Country.Id, m.Country.Title)}
  }
  }
  get editModel() { return this.model; }

  @Input()
  uploadedFiles: File[];

  @Output()
  onUploadImage: EventEmitter<any> = new EventEmitter();

  @Output() onReturn: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<BrandDto> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor() {
    super();
    this.model = new BrandDto();
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
  }
  
  //#endregion Lifecycle Hooks

  //#region Utilities

  //#endregion Utilities

  //#region Functions
  
  onSubmit(event) {
    if (true) {
      if(this.selectedCountry != null)
      {
        this.model.CountryId = this.selectedCountry.Id;
      }
      if(this.uploadedFiles.length != 0) {
        this.model.Logo = this.uploadedFiles[0].name;
        this.model.UploadedFiles = this.uploadedFiles;
      }  
      this.onSave.next(this.model);
    }
  }

  onCancel() {
    this.onReturn.next(true);
  }

  onUpload(e, file) {
    this.uploadedFiles = file.files;
  }
  //#endregion Functions
}
