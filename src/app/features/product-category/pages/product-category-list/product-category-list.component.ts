import { ProductCategoryService } from '../../services/product-category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategoryDataDto } from 'src/app/core/models/product/product-category-data.dto';
import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ProductCategoryDto } from 'src/app/core/models/product/product-category.dto';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-category-list.component.html'
})
export class ProductCategoryListComponent implements OnInit {

  //#region Properties
  productcategories: ProductCategoryDataDto[];
  loading;
  //#endregion Properties

  //#region Properties
  constructor(
    private router: Router,
    private productCategoryApi: ProductCategoryService,   
    private appMessageService: AppMessageService
  ) {
    this.productcategories = new Array<ProductCategoryDataDto>();
  }
  //#endregion Properties

  //#region Lifecycle Hooks
  ngOnInit() {
    this.getproducts();
  }
  //#endregion Lifecycle Hooks

  //#region Utilities
  private getproducts() {
    this.loading = true;
   
      setTimeout(() => {
        this.productCategoryApi.Get(null).subscribe(
          res => {
            this.productcategories = res.data as ProductCategoryDataDto[];
          });
        this.loading = false;
    }, 1000);
  }
  
  //#endregion Utilities

  //#region Functions
  onInsert(): void {
    this.router.navigate(['product-categories/create']);
  }

  onInsertSubSet(parentId: number) {
    this.router.navigate(['product-categories/create', parentId]);
  }

  onUpdate(id: number) {
    this.router.navigate(['product-categories/edit', id]);
  }

  onDelete(model: ProductCategoryDto) {
    this.productCategoryApi.Remove(model).subscribe(
      res => {
        if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
            (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.appMessageService.showSuccess();
        this.getproducts();
      },
      error2 => {
      }
    );
  }
  //#endregion Functions

}
