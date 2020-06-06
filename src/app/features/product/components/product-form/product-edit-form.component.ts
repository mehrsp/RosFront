import { DropBoxDto } from './../../../../core/models/base/drop-box-Dto';
import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';

import { SelectItem } from 'primeng/api';

import { ProductDto } from 'src/app/core/models/product/product.dto';
import { BaseComponent } from '../../../../core/base/base.component';


@Component({
  selector:     'app-product-edit-form',
  templateUrl:  './product-edit-form.component.html'
})
export class ProductEditFormComponent extends BaseComponent implements OnInit  {
  
  //#region Properties
  private model: ProductDto;
  private title: String = "محصول جدید";
  private selectedProductCategory: DropBoxDto;
  private selectedBrand: DropBoxDto;
  private selectedSupplier: DropBoxDto;  
  uploadedFiles: any[] = [];

  @Input() 
  set editModel(m: ProductDto) { 
    this.model = m;
    if(m.Id != null){
      if(m.Supplier){this.selectedSupplier = new DropBoxDto(m.Supplier.Id, m.Supplier.Name);}
      if(m.Brand){this.selectedBrand = new DropBoxDto(m.Brand.Id, m.Brand.Name)}
      this.selectedProductCategory = new DropBoxDto(m.ProductCategory.Id, m.ProductCategory.Name);

      this.model.Price = this.thousands(m.Price);
      this.isTrue = true;
    }; 
  }
  get editModel() { return this.model;  }

  @Input()  categories: SelectItem[];
  @Input()  suppliers: SelectItem[];
  @Input()  brands: SelectItem[];
  @Output() onReturn: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<ProductDto> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor() {
    super();
    this.model = new ProductDto();
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    if (this.editModel && this.editModel.Id > 0)
    {
      Object.assign(this.model, this.editModel);
      this.title = "ویرایش";
    }
  }  
  //#endregion Lifecycle Hooks

  //#region Utilities

  //#endregion Utilities

  //#region Functions
  onUpload(event) {
    // for(let file of event.files) {
    //     this.uploadedFiles.push(file);
    // }
    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  changeQuantity(index) {
      if(!this.model.IsQuantity)
      this.model.Quantity = 0; 
  }
  onSubmit(event) { 
    debugger;
    if (true) {
      if(this.selectedBrand != null)
      {
        this.model.BrandId = this.selectedBrand.Id;
      }
      if(this.selectedSupplier != null)
      {
        this.model.SupplierId = this.selectedSupplier.Id;
      }
      if(this.selectedProductCategory != null)
      {
        this.model.ProductCategoryId = this.selectedProductCategory.Id;
      }     
      this.onSave.next(this.model);
    }
  }

  onCancel() {
    this.onReturn.next(true);
  }

  onReturnProductDetail(event) {
    
  }
  onSaveProductDetail(event) {

  }   
  
  //#endregion Functions
}
