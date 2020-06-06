import { ExpandCollapseService } from '../../../../core/helpers/expand-collaps-tree-service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ConfirmationService, MenuItem } from 'primeng/primeng';
import { ProductDto } from 'src/app/core/models/product/product.dto';

@Component({
  selector: 'app-product-list-table',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list-table.component.css']
})
export class ProductListTableComponent implements OnInit {

  //#region Properties
  selectedProduct: ProductDto;
  items: MenuItem[];
  cols: any[];
  
  @Input()
  products: ProductDto[];

  @Input()
  loading: boolean[];

  @Output()
  onUpdate: EventEmitter<any> = new EventEmitter();

  @Output()  
  onInsertSubSet: EventEmitter<any> = new EventEmitter();

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  @Output()
  onRowDoubleClick: EventEmitter<any> = new EventEmitter();

  @Output()
  onRowDetail: EventEmitter<any> = new EventEmitter();

  @Output()
  productId: EventEmitter<number> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor(private confirmationService: ConfirmationService,
              private expandCollapseService: ExpandCollapseService) {     
    this.selectedProduct = new ProductDto;
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    this.initHeaders();
    this.initContext();
  }
  //#endregion Lifecycle Hooks

  //#region Functions
  initHeaders() {
    this.cols = [
      { field: 'Name', header: 'نام محصول' },
      { field: 'Price', header: 'قیمت' },
      { field: 'IsQuantity', header: 'وضعیت' },
      { field: 'Supplier.Name', header: 'عنوان تامین کننده' }
    ];
  }
  private initContext(){
    this.items = [{label: 'افزودن/ویرایش جزئیات کالا بر اساس رنگ و سایز', icon: 'pi pi-fw pi-minus', command: (event) => this.onInsertRowDetail(this.selectedProduct.Id)}
    ];
  }
  
  onEdit(row) {
    this.onUpdate.next(row.Id);
  }

  onInsert(row) {
    this.onInsertSubSet.next(row.model.Id);
  }

  onRemove(row) {
    this.confirmationService.confirm({
      message: 'آیا مطمئن هستید؟',
      accept: () => {
        this.onDelete.next(row.model);        
      },
    });
  }

  onInsertRowDetail(Id) {
    this.onRowDetail.next(Id);
  }

  onRowDoubleClicked(event) {
  }

  unselectFile(){
    this.selectedProduct = null;
  }
  expandAll(node){
    this.expandCollapseService.expandAll(node);
  }
  collapseAll(node){
    this.expandCollapseService.collapseAll(node);
  }
  QuantityStatus(quantity): string {
    if(quantity != 0) {
      return "موجود";
    }
    return "ناموجود";
  }
  onRowSelect(event) {
    this.productId.next(this.selectedProduct.Id);
  }
  onRowUnselect(event) {
    this.productId.next(0);    
  }
  //#endregion Functions
}
