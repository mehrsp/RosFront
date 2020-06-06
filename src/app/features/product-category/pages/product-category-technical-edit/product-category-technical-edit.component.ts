import { BrandService } from './../../../brand/services/barand.service';
import { TechnicalService } from './../../../technical/services/technical.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppMessageService } from 'src/app/core/helpers/app-message.service';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { DropBoxDto } from 'src/app/core/models/base/drop-box-Dto';
import { ProductCategoryTechnicalDto } from 'src/app/core/models/product/product-category-technical.dto';
import { ProductCategoryTechnicalService } from '../../services/product-category-technical.service';

@Component({
  selector: 'app-product-category-technical-edit',
  templateUrl: './product-category-technical-edit.component.html'
})
export class ProductCategoryTechnicalEditComponent implements OnInit, OnDestroy {

  //#region Properties
  model: ProductCategoryTechnicalDto;
  paramsSubs: any;
  technicals: DropBoxDto[];
  brands: DropBoxDto[];
  title: string = "افزودن مشخصه جدید";
  productCategoryId: number;

  //#endregion Properties

  //#region Ctors
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productCategoryTechnicalApi: ProductCategoryTechnicalService,
    private appMessageService: AppMessageService,
    private technicalApi: TechnicalService,
    private brandApi: BrandService
  ) {
    this.model = new ProductCategoryTechnicalDto();
    this.technicals = new Array<DropBoxDto>();
    this.brands = new Array<DropBoxDto>();
  }
  //#endregion Ctors

  //#region Utilities
  private navigateToList() {
    this.router.navigate(['product-categories/technicals', this.productCategoryId]);
  }
  //#endregion Utilities

  //#region Lifecycle Hooks
  ngOnInit() {
    this.getTechnicals();
  }

  ngOnDestroy() {
    // this.paramsSubs.unsubscribe();
  }
  //#endregion Lifecycle Hooks

  //#region Functions
  private getCurrentModel() {
    this.paramsSubs = this.route.params.subscribe(
      params => {
        this.productCategoryId = +params['productCategoryId'];
        }
    );
  }

  onReturn() {
    this.navigateToList();
  }

  private getTechnicals(){
    this.technicalApi.GetDropBox(null).subscribe(res => {
      this.technicals = res.Items as DropBoxDto[];
      this.getBrands();   
    });
  }
  private getBrands(){
    this.brandApi.GetDropBox(null).subscribe(res => {
      this.brands = res.Items as DropBoxDto[];
      this.getCurrentModel();   
    });
  }
  onTechnicals(event: any) {
    this.router.navigate(['technicals']);
  }
  onSave(model: ProductCategoryTechnicalDto) {
    this.productCategoryTechnicalApi.Create(model).subscribe(
      res => {
        if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
           (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.router.navigate(['product-categories/technicals', this.productCategoryId]).then(() => {
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
