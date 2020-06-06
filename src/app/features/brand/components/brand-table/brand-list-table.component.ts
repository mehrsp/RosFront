import { BrandDto } from '../../../../core/models/brands/brand.dto';
import { ExpandCollapseService } from '../../../../core/helpers/expand-collaps-tree-service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ConfirmationService, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-brand-list-table',
  templateUrl: './brand-list-table.component.html',
  styleUrls: ['./brand-list-table.component.css']
})
export class BrandListTableComponent implements OnInit {

  //#region Properties
  selectedBrand: BrandDto;
  cols: any[];

  @Input()
  brands: BrandDto[];

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

  @Output()
  onRowDoubleClick: EventEmitter<any> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor(private confirmationService: ConfirmationService,
              private expandCollapseService: ExpandCollapseService) {     
    this.selectedBrand = new BrandDto;
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    this.cols = [
      { field: 'Name', header: 'عنوان برند' },
      { field: 'Country.Title', header: 'کشور سازنده' }
  ];
  }
  //#endregion Lifecycle Hooks

  //#region Functions
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
  //#endregion Functions
}
