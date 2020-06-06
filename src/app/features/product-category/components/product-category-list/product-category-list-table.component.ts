import { AppMessageService } from './../../../../core/helpers/app-message.service';
import { ExpandCollapseService } from '../../../../core/helpers/expand-collaps-tree-service';
import { ProductCategoryDataDto } from '../../../../core/models/product/product-category-data.dto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ConfirmationService, MenuItem } from 'primeng/primeng';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category-list-table',
  templateUrl: './product-category-list-table.component.html',
  styleUrls: ['./product-category-list-table.component.css']
})
export class ProductCategoryListTableComponent implements OnInit {

  //#region Properties
  selectedProductCategory: ProductCategoryDataDto;
  
  @Input()
  productcategories: ProductCategoryDataDto[];

  @Input()
  loading: boolean[];

  @Input()
  items: MenuItem[];

  @Output()
  onUpdate: EventEmitter<any> = new EventEmitter();

  @Output()  
  onInsertSubSet: EventEmitter<any> = new EventEmitter();

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor(private confirmationService: ConfirmationService,
              private expandCollapseService: ExpandCollapseService,
              private router: Router,
              private appMessageService: AppMessageService) {     
    this.selectedProductCategory = new ProductCategoryDataDto;
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    this.initContext();
  }
  //#endregion Lifecycle Hooks

  //#region Functions
  private initContext(){
    this.items = [
      {label: 'لغو انتخاب', icon: 'pi pi-fw pi-minus', command: (event) => this.unselectFile()},
      {label: 'افزودن زیرمجموعه', icon: 'pi pi-fw pi-plus', command: (event) => this.onInsert(this.selectedProductCategory)},
      {label: 'افزودن مشخصه برای فیلتر', icon: 'pi pi-fw pi-plus', command: (event) => this.onTechnical(this.selectedProductCategory)},
      {label: 'نمایش محصولات', icon: 'pi pi-fw pi-external-link', command: (event) => this.onProduct(this.selectedProductCategory)},
      {label: 'ویرایش', icon: 'pi pi-fw pi-pencil', command: (event) => this.onEdit(this.selectedProductCategory)},
      {label: 'حذف', icon: 'pi pi-fw pi-trash', command: (event) => this.onRemove(this.selectedProductCategory)}
    ];
  }
  
  onEdit(row: any) {
    this.onUpdate.next(row.model.Id);
  }

  onInsert(row: any) {
    this.onInsertSubSet.next(row.model.Id);
  }

  onTechnical(row: any)
  {
    if(row.children == undefined) {
      this.router.navigate(['product-categories/technicals', row.model.Id]);
    } else {
      this.appMessageService.showException("دسته بندی انتخاب شده دارای زیر مجموعه است. مجاز به افزودن فیلتر نمی باشید.");
    }
  }

  onRemove(row: any) {
    this.confirmationService.confirm({
      message: 'آیا مطمئن هستید؟',
      accept: () => {
        this.onDelete.next(row.model);        
      },
    });
  }

  onRowDoubleClicked(event) {
  }

  onProduct(row: ProductCategoryDataDto) {
    this.router.navigate(['products', row.model.Id]);
  }

  unselectFile(){
    this.selectedProductCategory = null;
  }
  expandAll(node){
    this.expandCollapseService.expandAll(node);
  }
  collapseAll(node){
    this.expandCollapseService.collapseAll(node);
  }
  //#endregion Functions
}
