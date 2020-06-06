import { ProductCategoryService } from './../../services/product-category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { ProductCategoryTechnicalDto } from 'src/app/core/models/product/product-category-technical.dto';
import { ProductCategoryTechnicalService } from '../../services/product-category-technical.service';

@Component({
  selector: 'app-product-category-technical-list',
  templateUrl: './product-category-technical-list.component.html'
})
export class ProductCategoryTechnicalListComponent implements OnInit {

  //#region Properties
  paramsSubs: any;
  productCategoryTechnicals: ProductCategoryTechnicalDto[];
  productCategoryId: number;
  productCategoryName: string;
  //#endregion Properties

  //#region Properties
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productCategoryTechnicalApi: ProductCategoryTechnicalService,   
    private appMessageService: AppMessageService,
    private productCategoryApi: ProductCategoryService
  ) {
    this.productCategoryTechnicals = new Array<ProductCategoryTechnicalDto>();
  }
  //#endregion Properties

  //#region Lifecycle Hooks
  ngOnInit() {
    this.getCurrentModel();
  }
  //#endregion Lifecycle Hooks

  //#region Utilities
  private getProductCategoryTechnicals(id: number) {
    this.productCategoryTechnicalApi.GetByProductCategoryId(id).subscribe(
        res => {
          this.productCategoryTechnicals = res.ProductCategoryTechnicals as ProductCategoryTechnicalDto[];
    });
  }
  private getCurrentModel() {
    this.paramsSubs = this.route.params.subscribe(
      params => {
        this.productCategoryId = +params['productCategoryId'];
        this.productCategoryApi.GetById(this.productCategoryId).subscribe((res:any) => {
          this.productCategoryName = res.Name;
          this.getProductCategoryTechnicals(this.productCategoryId);
        });
        }
    );
  }  
  //#endregion Utilities

  //#region Functions
  onInsert(): void {
    this.router.navigate(['/product-categories/technicals/create', this.productCategoryId]);
  }
  onCancel() {
    this.router.navigate(['/product-categories']);
  }
  onDelete(model: ProductCategoryTechnicalDto) {
    this.productCategoryTechnicalApi.Remove(model).subscribe(
      res => {
        if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
            (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.appMessageService.showSuccess();
        this.getProductCategoryTechnicals(model.ProductCategoryId);
      },
      err => {
        this.appMessageService.showException(err);
      }
    );
  }
  //#endregion Functions

}
