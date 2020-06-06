import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { BaseComponent } from "src/app/core/base/base.component";
import { AppMessageService } from "src/app/core/helpers/app-message-service";
import { ConfirmationService } from "primeng/api";

@Component({
    selector: 'app-slides-list-table',
    templateUrl: './slides-list-table.component.html'
  })
  export class SlideShowListTableComponent extends BaseComponent implements OnInit {
      
  //#region Properties

  @Input()
  images: any[];

  @Input()
  isDisplayGalleria: boolean;

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor(private appMessageService: AppMessageService,
              private confirmationService: ConfirmationService) {
        super();  
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
  }
  //#endregion Lifecycle Hooks

  //#region Functions
  onImageClicked(object) {
    this.confirmationService.confirm({
      message:'عکس شماره' + ' ' + (object.index + 1) + ' ' + 'حذف خواهد شد. آیا مطمئن هستید؟',
      accept: () => {
        this.onDelete.next(object.image.element);        
      },
    });
  }
  //#endregion Functions
  }
  