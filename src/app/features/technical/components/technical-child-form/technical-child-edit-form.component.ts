import { TechnicalDto } from 'src/app/core/models/product/technical.dto';
import { BaseComponent } from '../../../../core/base/base.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';import { SelectItem } from 'primeng/api';



@Component({
  selector:     'app-technical-child-edit-form',
  templateUrl:  './technical-child-edit-form.component.html'
})
export class TechnicalChildEditFormComponent extends BaseComponent implements OnInit  {
  
  //#region Properties
  private model: TechnicalDto;

  @Input() 
  childTitle: String; 
  
  @Input() 
  set editModel(m: TechnicalDto) { this.model = m;}
  get editModel() { return this.model; }

  @Input()
  technicalId: number;

  @Output() onReturn: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<TechnicalDto> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor() {
    super();
    this.model = new TechnicalDto();
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
  }
  
  //#endregion Lifecycle Hooks

  //#region Functions
  
  onSubmit(event) {
    if (true) {
      this.model.ParentId = this.technicalId;
      this.onSave.next(this.model);
    }
  }

  onCancel() {
    this.onReturn.next(true);
  }
  //#endregion Functions
}
