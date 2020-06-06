import { TechnicalDto } from './../../../../core/models/product/technical.dto';
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { BaseComponent } from "src/app/core/base/base.component";
import { ConfirmationService, SelectItem } from "primeng/api";
import { ProductTechnicalDto } from "src/app/core/models/product/product-Technical.dto";
import { DropBoxDto } from 'src/app/core/models/base/drop-box-Dto';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-technical',
    templateUrl: './product-technical.component.html'
  })
  export class ProductTechnicalComponent extends BaseComponent implements OnInit {
      
  //#region Properties
  model: ProductTechnicalDto; 
  selectedTechnicalChild: DropBoxDto;
  cols: any[];
  isTechnicalSelected: boolean = true;

  @Input()
  isTechnical: boolean;

  @Input()
  selectedProductCategoryTechnical: DropBoxDto;

  @Input()
  technicalChilds: SelectItem[];

  @Input()
  technicals: ProductTechnicalDto[];

  @Input()
  productCategoryTechnicals: SelectItem[];

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  @Output()
  onSave: EventEmitter<ProductTechnicalDto> = new EventEmitter();

  @Output()
  onInitTechnicals: EventEmitter<any> = new EventEmitter();
  
  @Output()
  onTechnicalSelectionChange: EventEmitter<any> = new EventEmitter();

  @Output()
  initProductTechnical: EventEmitter<any> = new EventEmitter();  

  @Output()
  onSelectedProductCategoryTechnical: EventEmitter<any> = new EventEmitter();  
  //#endregion Properties

  //#region Ctors
  constructor(private confirmationService: ConfirmationService,
              private router: Router,
              ) {
        super();  
        this.model = new ProductTechnicalDto();
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    this.initHeaders();
  }  
  //#endregion Lifecycle Hooks

  //#region Functions
  initHeaders() {
    this.cols = [
      { field: 'Technical.Title', header: 'نام مشخصه' },
      { field: 'Desctiption', header: 'توضیحات' }
    ];
  }
  clearTechnical() {
    this.model = new ProductTechnicalDto();
    this.selectedProductCategoryTechnical = new DropBoxDto();
    this.selectedTechnicalChild = new DropBoxDto();
    this.isTechnical = true;
    this.isTechnicalSelected = true;
  }
  onChangeTechnical(e: any) {
      this.onTechnicalSelectionChange.next(e.value.Id);
  }
  onSubmit(e) {
    if(this.isTechnicalSelected == false) {
      this.model.TechnicalId = null;
    }else {
      this.model.TechnicalId = this.selectedTechnicalChild.Id;
      this.model.Name = null;
      this.model.Description = null;
      this.model.IsChecked = false;
      this.model.IsValid = false;
    }
    this.onSave.next(this.model);
    this.clearTechnical();
    this.isTechnical = false;
    this.initProductTechnical.next();
  }

  onOpenDialog(Technical) {
    this.clearTechnical();
    this.model = Technical;
    if(this.model.TechnicalId != null) {
      this.selectedTechnicalChild = new DropBoxDto(this.model.TechnicalId, this.model.Technical.Title);
      this.onProductTechnical(this.model.Technical.ParentId);
      this.isTechnicalSelected = true;
    } else {
      this.isTechnicalSelected = false;
    }
  }

  onProductTechnical(id: number) {
     this.onSelectedProductCategoryTechnical.next(id);
  }

  onTechnicalList(e: any) {
    this.router.navigate(['technicals']);
  }

  removeTechnical(e) {
    this.confirmationService.confirm({
      message: 'آیا مطمئن هستید؟',
      accept: () => {
        this.onDelete.next(e);        
      },
    });
  }

  onInsert() {
    this.clearTechnical();
    this.isTechnical = true;
    this.isTechnicalSelected = true;
  }
  //#endregion Functions
  }
  