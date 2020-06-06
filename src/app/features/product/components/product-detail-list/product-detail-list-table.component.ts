import { ExpandCollapseService } from '../../../../core/helpers/expand-collaps-tree-service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ConfirmationService, MenuItem } from 'primeng/primeng';
import { BaseComponent } from 'src/app/core/base/base.component';
import { ProductDto } from 'src/app/core/models/product/product.dto';

@Component({
  selector: 'app-product-detail-list-table',
  templateUrl: './product-detail-list-table.component.html'
})
export class ProductDetailListTableComponent extends BaseComponent implements OnInit {

  //#region Properties
  selectedProductDetail: ProductDto;
  cols: any[];
  clonedProductDetail: { [s: number]: ProductDto; } = {};

  @Input() 
  id: number;

  @Input()
  productDetails: ProductDto[];

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  @Output()
  onSave: EventEmitter<any> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor(private confirmationService: ConfirmationService,
              private expandCollapseService: ExpandCollapseService) {
          super();  
          this.selectedProductDetail = new ProductDto();
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    this.initHeaders();
  }
  //#endregion Lifecycle Hooks

  //#region Functions
  initHeaders() {
    this.cols = [
      { field: 'Name', header: 'نام محصول' },
      { field: 'Price', header: 'قیمت' },
      { field: 'IsQuantity', header: 'وضعیت' },
      { field: 'Quantity', header: 'تعداد' }
    ];
  }
  changeQuantity(index: number) {
    if(!this.productDetails[index].IsQuantity)
    {
      this.productDetails[index].Quantity = 0;
    }else{
      this.productDetails[index].Quantity = 1;
    }
  }

  QuantityStatus(quantity): string {
    if(quantity) {
      return "موجود";
    }
    return "ناموجود";
  }

  onRemove(row) {
    this.confirmationService.confirm({
      message: 'آیا مطمئن هستید؟',
      accept: () => {
        this.onDelete.next(row);        
      },
    });
  }

  onRowEditInit(productDetail: ProductDto) {
        // this.clonedProductDetail[productDetail.Id] = {...productDetail};
  }

  onRowEditSave(productDetail: ProductDto) {
    delete this.clonedProductDetail[productDetail.Id];
    if(!productDetail.IsQuantity) {
      productDetail.Quantity = 0;
    }else if(productDetail.IsQuantity && productDetail.Quantity == 0)
    {
      productDetail.Quantity = 1;
    }
    this.onSave.next(productDetail);
          
  }

  onRowEditCancel(productDetail: ProductDto, index: number) {
      this.productDetails[index] = this.clonedProductDetail[productDetail.Id];
      delete this.clonedProductDetail[productDetail.Id];
  }
  //#endregion Functions
}
