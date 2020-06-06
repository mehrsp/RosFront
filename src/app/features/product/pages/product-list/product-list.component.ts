import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { ProductDto } from 'src/app/core/models/product/product.dto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {

  //#region Properties
  products: ProductDto[];
  loading;
  productCategoryId: number = 0;
  productId: number = 0;
  paramsSubs: any;
  //#endregion Properties

  //#region Properties
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productApi: ProductService,   
    private appMessageService: AppMessageService
  ) {
    this.products = new Array<ProductDto>();
  }
  //#endregion Properties

  //#region Lifecycle Hooks
  ngOnInit() {
    this.getCurrentModel();
  }
  //#endregion Lifecycle Hooks

  //#region Utilities
  //#endregion Utilities

  //#region Functions
  getCurrentModel() {
    this.paramsSubs = this.route.params.subscribe(
      params => {
        this.productCategoryId = +params['pc-id'];
        if (this.productCategoryId) {
          this.productApi.GetByProudctCategoryId(this.productCategoryId).subscribe(
            res => {
              this.products = res.Products as ProductDto[];
            }
          );
        }else{
          this.getProducts();
        }
        }
    );
  }
  
  getProducts() {
    this.productApi.Get(null).subscribe(res =>{
      this.products = res.Products as ProductDto[];
    });
  }
  
  onInsert(): void {
    this.router.navigate(['products/create']);
  }
  
  onInsertAttachments(): void  {
    if(this.productId == 0) {
      this.appMessageService.showException(
        "اخطار" + "-" + "ابتدا یک محصول را انتخاب نمایید")
    }else {
    this.router.navigate(['products/product-attachment', this.productId]);
    }
  }

  onUpdate(id: number) {
    this.router.navigate(['products/create', id]);
  }

  onRowDetail(id: number) {
    this.router.navigate(['products/product-detail', id]);
  }

  onDelete(model: ProductDto) {
    this.productApi.Remove(model).subscribe(
      res => {
        if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
            (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.appMessageService.showSuccess();
      },
      error2 => {
      }
    );
  }
  changeProductId(id: number) {
    this.productId = id;
  }
  //#endregion Functions

}
