import { BaseComponent } from '../../../../core/base/base.component';
import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { TechnicalDto } from 'src/app/core/models/product/technical.dto';


@Component({
  selector:     'app-technical-edit-form',
  templateUrl:  './technical-edit-form.component.html'
})
export class TechnicalEditFormComponent extends BaseComponent implements OnInit  {
  
  //#region Properties
  private model: TechnicalDto;
  
  @Input() 
  technicalTitle: String; 
  
  @Input() 
  set editModel(m: TechnicalDto) { this.model = m; this.isTrue = true;}
  get editModel() { return this.model; }

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

  //#region Utilities

  //#endregion Utilities

  //#region Functions
  
  onSubmit(event) {
    if (true) {
      this.onSave.next(this.model);
    }
  }

  onCancel() {
    this.onReturn.next(true);
  }
  //#endregion Functions
}
