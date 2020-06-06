import { BaseComponent } from "src/app/core/base/base.component";
import { OnInit, Component, Input, Output, EventEmitter } from "@angular/core";
import { ProductDto } from "src/app/core/models/product/product.dto";

@Component({
  selector:     'app-product-detail-form',
  templateUrl:  './product-detail-form.component.html'
})
export class ProductDetailEditFormComponent extends BaseComponent implements OnInit  {
  
  //#region Properties
  @Input() model: ProductDto;

  @Input() 
  set editModel(m: ProductDto) { 
    this.model = m;
  }
  get editModel() { return this.model;  }

  @Output() onReturn: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor() {
    super();
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    if (this.editModel && this.editModel.Id > 0)
    {
      Object.assign(this.model, this.editModel);
    }
  }  
  //#endregion Lifecycle Hooks

  //#region Utilities

  //#endregion Utilities

  //#region Functions
  onSubmit(event) { 
    if (true) {
      if(!this.model.IsQuantity) {
        this.model.Quantity = 0;
      }else if(this.model.IsQuantity && this.model.Quantity == 0)
      {
        this.model.Quantity = 1;
      }
      this.onSave.next(this.model);
    }
  }
  onCancel() {
    this.onReturn.next(true);
  }

  changeQuantity() {
    if(!this.model.IsQuantity)
    {
      this.model.Quantity = 0;
    }else{
      this.model.Quantity = 1;
    }
  }

  //#endregion Functions
}
