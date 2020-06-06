import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ConfirmationService, MenuItem } from 'primeng/primeng';
import { TechnicalDto } from 'src/app/core/models/product/technical.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technical-list-table',
  templateUrl: './technical-list-table.component.html'
})
export class TechnicalListTableComponent implements OnInit {

  //#region Properties
  selectedTechnical: TechnicalDto;
  cols: any[];
  items: MenuItem[];

  @Input()
  technicals: TechnicalDto[];
  
  @Output()
  onUpdate: EventEmitter<any> = new EventEmitter();

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor(private confirmationService: ConfirmationService,
              private router: Router,
             ) {     
    this.selectedTechnical = new TechnicalDto;
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    this.cols = [
      { field: 'Title', header: 'عنوان مشخصه' }
  ];
  this.initContext();
  }
  //#endregion Lifecycle Hooks

  //#region Utilities
  private initContext(){
    this.items = [{label: 'مشاهده/افزودن مقادیر برای مشخصه', icon: 'pi pi-fw pi-minus', command: (event) => this.onTechnicalChild(this.selectedTechnical.Id)}
    ];
  }
  //#endregion

  //#region Functions
  onTechnicalChild(id: number) {
    this.router.navigate(['technicals/childs', id]);
  }
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

  onRowDoubleClicked(event) {
  }

  unselectFile(){
    // this.selectedProductCategory = null;
  }  
  //#endregion Functions
}
