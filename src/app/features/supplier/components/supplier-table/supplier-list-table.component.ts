import { ItemDto } from './../../../../core/models/client/areaOfRecovery/item.dto';
import { Common } from './../../../../core/common/enums';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ConfirmationService, MenuItem } from 'primeng/primeng';
import { SupplierDto } from 'src/app/core/models/members/supplier.dto';

@Component({
  selector: 'app-supplier-list-table',
  templateUrl: './supplier-list-table.component.html',
  styleUrls: ['./supplier-list-table.component.css']
})
export class SupplierListTableComponent implements OnInit {

  //#region Properties
  selectedSupplier: SupplierDto;
  cols: any;
  
  @Input()
  suppliers: SupplierDto[];

  @Input()
  loading: boolean;

  @Input()
  items: MenuItem[];

  @Output()
  onUpdate: EventEmitter<any> = new EventEmitter();

  @Output()  
  onInsertSubSet: EventEmitter<any> = new EventEmitter();

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  @Output()
  onRowDoubleClick: EventEmitter<any> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor(private confirmationService: ConfirmationService) {     
    this.selectedSupplier = new SupplierDto;
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    this.initCols();
  }
  //#endregion Lifecycle Hooks

  //#region Functions
  initCols() {
    this.cols = [
      { field: 'Name', header: 'عنوان' },
      { field: 'CompanyType', header: 'نوع تامین کننده' },
      { field: 'Phone', header: 'همراه' },
      { field: 'Website', header: 'وب سایت' },
      { field: 'Fax', header: 'فکس' },
      { field: 'Email', header: 'ایمیل' }
  ];
  }

  onEdit(row) {
    this.onUpdate.next(row.Id);
  }

  onInsert(row) {
    this.onInsertSubSet.next();
  }

  onRemove(row) {
    this.confirmationService.confirm({
      message: 'آیا مطمئن هستید؟',
      accept: () => {
        this.onDelete.next(row);        
      },
    });
  }

  onRowDoubleClicked(event) {
  }

  unselectFile(){
    // this.selectedProductCategory = null;
  }

  CompanyType(CompanyType){
    switch(CompanyType) {
      case Common.CompanyType.Importer:
        return 'وارد کننده';
      case Common.CompanyType.Producer:
        return 'تولید کننده';
      case Common.CompanyType.Distributor:
         return 'توزیع کننده';
      default:
          break;   

    }
  

    }
  //#endregion Functions
}
