import { BaseComponent } from '../../../../core/base/base.component';
import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ProductCategoryDto } from 'src/app/core/models/product/product-category.dto';


@Component({
  selector:     'app-product-category-edit-form',
  templateUrl:  './product-category-edit-form.component.html'
})
export class ProductCategoryEditFormComponent extends BaseComponent implements OnInit  {
  
  //#region Properties
  private model: ProductCategoryDto;

  @Input() 
  title: String; 

  @Input() 
  set editModel(m: ProductCategoryDto) { 
    this.model = m;
  }
  get editModel() { return this.model; }

  @Output() onReturn: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<ProductCategoryDto> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor() {
    super();
    this.model = new ProductCategoryDto();
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    if (this.editModel && this.editModel.Id > 0)
    {
      Object.assign(this.model, this.editModel);
      this.title = "ویرایش دسته بندی";
    }
     
  }
  
  //#endregion Lifecycle Hooks

  //#region Utilities

  //#endregion Utilities

  //#region Functions
  
  onSubmit(event) { 
    if (true) {
      this.onSave.next(this.model);
    }
  }

  onCancel() {
    this.onReturn.next(true);
  }

  //#endregion Functions
}
