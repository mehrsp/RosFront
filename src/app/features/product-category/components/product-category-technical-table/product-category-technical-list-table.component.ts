import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ConfirmationService } from 'primeng/primeng';
import { ProductCategoryTechnicalDto } from 'src/app/core/models/product/product-category-technical.dto';

@Component({
  selector: 'app-product-category-technical-list-table',
  templateUrl: './product-category-technical-list-table.component.html'
})
export class ProductCategoryTechnicalListTableComponent implements OnInit {

  //#region Properties
  selectedProductCategoryTechnical: ProductCategoryTechnicalDto;
  cols: any[];

  @Input()
  productCategoryTechnicals: ProductCategoryTechnicalDto[];

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor(private confirmationService: ConfirmationService) {     
    this.selectedProductCategoryTechnical = new ProductCategoryTechnicalDto;
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    this.cols = [
      { field: 'Technical.Title', header: 'عنوان مشخصه' },
      { field: 'Brand.Name', header: 'عنوان برند' }
  ];
  }
  //#endregion Lifecycle Hooks

  //#region Functions
  onRemove(row) {
    this.confirmationService.confirm({
      message: 'آیا مطمئن هستید؟',
      accept: () => {
        this.onDelete.next(row);        
      },
    });
  }
  //#endregion Functions
}
