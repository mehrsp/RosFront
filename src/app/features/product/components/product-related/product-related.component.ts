import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { BaseComponent } from "src/app/core/base/base.component";
import { ConfirmationService } from "primeng/api";
import { ProductRelatedDto } from "src/app/core/models/product/product-Related.dto";

@Component({
    selector: 'app-product-related',
    templateUrl: './product-related.component.html'
  })
  export class ProductRelatedComponent extends BaseComponent implements OnInit {
      
  //#region Properties
  isRelated: boolean = false;
  model: ProductRelatedDto; 

  @Input()
  relateds: ProductRelatedDto[];

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  @Output()
  onSave: EventEmitter<ProductRelatedDto> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor(private confirmationService: ConfirmationService) {
        super();  
        this.model = new ProductRelatedDto();
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
  }
  //#endregion Lifecycle Hooks

  //#region Functions
  clearRelated() {
    this.model = new ProductRelatedDto();
    this.isRelated = false;
  }
  onSubmit(e) {
    this.onSave.next(this.model);
    this.clearRelated();
  }

  onOpenDialog(related) {
    this.isRelated = true;
    this.model = related;
  }

  removeRelated(e) {
    this.confirmationService.confirm({
      message: 'آیا مطمئن هستید؟',
      accept: () => {
        this.onDelete.next(e);        
      },
    });
  }

  onInsert() {
    this.isRelated = true;
  }
  //#endregion Functions
  }
  