import { TechnicalDto } from 'src/app/core/models/product/technical.dto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-technical-child-list-table',
  templateUrl: './technical-child-list-table.component.html'
})
export class TechnicalChildListTableComponent implements OnInit {

  //#region Properties
  selectedTechnicalChild: TechnicalDto;
  cols: any[];

  @Input()
  technicalChilds: TechnicalDto[];

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  @Output()
  onUpdate: EventEmitter<any> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor(private confirmationService: ConfirmationService) {     
    this.selectedTechnicalChild = new TechnicalDto;
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    this.cols = [
      { field: 'Technical.Title', header: 'عنوان مشخصه' }
  ];
  }
  //#endregion Lifecycle Hooks

  //#region Functions
  onEdit(row) {
    this.onUpdate.next(row.Id);
  }
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
