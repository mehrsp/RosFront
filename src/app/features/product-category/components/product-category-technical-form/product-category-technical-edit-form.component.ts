import { AppMessageService } from './../../../../core/helpers/app-message-service';
import { DropBoxDto } from 'src/app/core/models/base/drop-box-Dto';
import { BaseComponent } from '../../../../core/base/base.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';import { SelectItem } from 'primeng/api';
import { ProductCategoryTechnicalDto } from 'src/app/core/models/product/product-category-technical.dto';


@Component({
  selector:     'app-product-category-technical-edit-form',
  templateUrl:  './product-category-technical-edit-form.component.html'
})
export class ProductCategoryTechnicalEditFormComponent extends BaseComponent implements OnInit  {
  
  //#region Properties
  private model: ProductCategoryTechnicalDto;
  private selectedTechnical: DropBoxDto;
  private selectedBrand: DropBoxDto;
  isTechnicalSelected: boolean = true;
  @Input() technicals: SelectItem[];
  @Input() brands: SelectItem[];

  @Input() 
  title: String; 
  
  @Input() 
  set editModel(m: ProductCategoryTechnicalDto) { this.model = m;}
  get editModel() { return this.model; }

  @Input()
  uploadedFiles: File[];

  @Input()
  productCategoryId: number;

  @Output()
  onUploadImage: EventEmitter<any> = new EventEmitter();

  @Output()
  onTechnicals: EventEmitter<any> = new EventEmitter();

  @Output() onReturn: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<ProductCategoryTechnicalDto> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor(private appMessageService: AppMessageService) {
    super();
    this.model = new ProductCategoryTechnicalDto();
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
      if(this.selectedTechnical == null && this.selectedBrand == null) 
      {
        this.appMessageService.showException("ابتدا مشخصه و یا برند مورد نظر را انتخاب نمایید");
      }
      else
      {
        if(this.selectedTechnical != null)
        {
          this.model.TechnicalId = this.selectedTechnical.Id;
        }
        if(this.selectedBrand != null)
        {
          this.model.BrandId = this.selectedBrand.Id;
        }
        this.model.ProductCategoryId = this.productCategoryId;
        this.onSave.next(this.model);
      }    
    }
  }

  onTechnical() {
    this.onTechnicals.next(true);
  }

  onCancel() {
    this.onReturn.next(true);
  }
  //#endregion Functions
}
