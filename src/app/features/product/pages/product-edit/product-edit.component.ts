import { DropBoxDto } from './../../../../core/models/base/drop-box-Dto';
import { SupplierService } from './../../../supplier/services/supplier.service';
import { BrandService } from './../../../brand/services/barand.service';
import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserDto } from 'src/app/core/models/authentication/user.dto';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { ProductDto } from 'src/app/core/models/product/product.dto';

import { ProductService } from '../../services/product.service';
import { AppMessageService } from 'src/app/core/helpers/app-message.service';
import { ProductCategoryService } from 'src/app/features/product-category/services/product-category.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit, OnDestroy {

  //#region Properties
  parnetId: number;
  id: number;
  model: ProductDto;
  managers: UserDto[];
  supportWorkers: UserDto[];
  paramsSubs: any;
  categories: DropBoxDto[];
  suppliers: DropBoxDto[];
  brands: DropBoxDto[];
  isDateRender: boolean = false;
  display: boolean = false;
  //#endregion Properties

  //#region Ctors
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productApi: ProductService,
    private appMessageService: AppMessageService,
    private productCategoryApi: ProductCategoryService,
    private BrandApi: BrandService,
    private supplierApi: SupplierService
  ) {
    this.parnetId = 0;
    this.model = new ProductDto();
    this.categories = new Array<DropBoxDto>();
    this.brands = new Array<DropBoxDto>();
    this.suppliers = new Array<DropBoxDto>();
  }
  //#endregion Ctors

  //#region Utilities
  private navigateToList() {
    this.router.navigate(['/products']);
  }
  //#endregion Utilities

  //#region Lifecycle Hooks
  ngOnInit() {
   this.getCategories();
  }

  ngOnDestroy() {
    // this.paramsSubs.unsubscribe();
  }
  //#endregion Lifecycle Hooks

  //#region Functions
  private getCurrentModel() {
    this.paramsSubs = this.route.params.subscribe(
      params => {
        this.parnetId = +params['parentId'];
        this.model.ParentId = this.parnetId;
        this.id = +params['id'];
        if (this.id && this.id > 0) {
          this.productApi.GetById(this.id).subscribe(
            res => {
              this.model = res as ProductDto;
            }
          );
        }
        }
    );
  }

  private getCategories() {
    this.productCategoryApi.GetDropBox(null).subscribe(res => {
      this.categories = res.Items as DropBoxDto[];
      this.getSuppliers();
    });
  }

  private getSuppliers() {
    this.supplierApi.GetDropBox(null).subscribe(res => {
     this.suppliers = res.Items as DropBoxDto[];
      this.getBrands();
    });
  }

  private getBrands(){
    this.BrandApi.GetDropBox(null).subscribe(res => {
      this.brands = res.Items as DropBoxDto[];
      this.getCurrentModel();
      this.isDateRender = true;      
    });
  }

  onReturn() {
    this.navigateToList();
  }

  onSave(model: ProductDto) {
    this.productApi.Create(model).subscribe(
      res => {
          if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
           (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.router.navigate(['/products']).then(() => {
        this.appMessageService.showSuccess();
        });
      },
      err => {
        this.appMessageService.showException(err);
      }
    );
  }

  //#endregion Functions
}
