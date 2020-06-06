import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { ProductDto } from 'src/app/core/models/product/product.dto';

@Component({
  selector: 'app-product-detail-list',
  templateUrl: './product-detail-list.component.html'
})
export class ProductDetailListComponent implements OnInit {

  //#region Properties
  paramsSubs: any;
  id: number;
  isDetail: boolean = false;
  model: ProductDto;
  title: string;
  productDetails: ProductDto[];
  //#endregion Properties

  //#region Ctors
  constructor(
    private route: ActivatedRoute,
    private router: Router,  
    private appMessageService: AppMessageService,
    private productApi: ProductService
  ) {
    this.model = new ProductDto();
    this.productDetails = new Array<ProductDto>();
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    this.getCurrentModel();
  }
  //#endregion Lifecycle Hooks

  //#region Utilities
  //#endregion Utilities

  //#region Functions
  private getCurrentModel() {
    this.paramsSubs = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        this.getProduct();
        this.getProductDetails();
        
        if (this.id && this.id > 0) {
        }
        }
    );
  }
  getProduct() {
    this.productApi.GetById(this.id).subscribe(res =>{
      this.title = res.Name;
    });
  }
  getProductDetails() {
    this.productApi.GetById(this.id).subscribe(res =>{
      this.productDetails = res.Children as ProductDto[]; 
    });
  }
  initialProductDetail() {
    this.model = new ProductDto();  
  }
  showDialog() {
    this.isDetail = true;
  }
  closeDialog() {
    this.isDetail = false;
    this.getProductDetails();
  }
  onCancel() {
    this.router.navigate(['products']);    
  }
  onSave(model: ProductDto) {
    model.ParentId = this.id;
    this.productApi.Create(model).subscribe(
      res => {
          if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
           (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.closeDialog();
      },
      err => {
        this.appMessageService.showException(err);
      }
    );
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
        this.getProductDetails();
      },
      error2 => {
      }
    );
  }
  //#endregion Functions

}
