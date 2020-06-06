import { TechnicalService } from './../../../technical/services/technical.service';
import { ProductTechnicalDto } from './../../../../core/models/product/product-technical.dto';
import { ProductRelatedService } from './../../services/product-related.service';
import { ProductCatalogService } from './../../services/product-catalog.service';
import { ProductImageService } from './../../services/product-image.service';
import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ProductService } from '../../services/product.service';
import { ProductImageDto } from 'src/app/core/models/product/product-image.dto';
import Globals from 'src/app/core/helpers/globals';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { ProductCatalogDto } from 'src/app/core/models/product/product-catalog.dto';
import { from } from 'rxjs';
import { ProductRelatedDto } from 'src/app/core/models/product/product-related.dto';
import { ProductTechnicalService } from '../../services/product-technical.service';
import { DropBoxDto } from 'src/app/core/models/base/drop-box-Dto';
import { SelectItem } from 'primeng/api';
@Component({
    selector: 'app-product-attachment',
    templateUrl: './product-attachment.component.html'
})
export class ProductAttachmentComponent implements OnInit {
    
    //#region Property
    paramsSubs: any;
    id: number;
    title: string;
    productImages: ProductImageDto[];
    images: any[] = [];
    catalogs: ProductCatalogDto[];
    relateds: ProductRelatedDto[];
    technicals: ProductTechnicalDto[];
    isDisplayGalleria: boolean = false;
    uploadedFiles: File[] = [];
    tabIndex: number = 0;
    productCategoryTechnicals: DropBoxDto[];
    technicalChilds: DropBoxDto[];
    selectedProductCategoryTechnical: DropBoxDto;
    isTechnical: boolean = false;
    //#endregion 
    
    //#region Ctors
    constructor(
        private route: ActivatedRoute,
        private router: Router, 
        private appMessageService: AppMessageService,
        private productApi: ProductService,
        private productImageApi: ProductImageService,
        private productCatalogApi: ProductCatalogService,
        private productRelatedApi: ProductRelatedService,
        private productTechnicalApi: ProductTechnicalService,
        private technicalApi: TechnicalService
    ) {
        this.productImages = new Array<ProductImageDto>();
        this.relateds = new Array<ProductRelatedDto>();
        this.technicals = new Array<ProductTechnicalDto>();
        this.productCategoryTechnicals = new Array<DropBoxDto>();
        this.technicalChilds = new Array<DropBoxDto>();
        this.selectedProductCategoryTechnical = new DropBoxDto();
    }
    //#endregion  

    //#region Lifecycle Hooks
    ngOnInit() {
        this.catalogs = new Array<ProductCatalogDto>();
        this.getCurrentModel();
    }
    //#endregion 

    //#region Utilities
    //#endregion 

    //#region Functions
    private getCurrentModel() {
        this.paramsSubs = this.route.params.subscribe(
        params => {
            this.id = +params['id'];
            this.getProduct();
            if (this.id && this.id > 0) {
            }
            }
        );
    }
    getProduct() {
    this.productApi.GetById(this.id).subscribe(res =>{
        this.title = res.Name;
        this.initProductImages();
    });
    }
    onInitTechnicals() {
        this.technicalApi.GetDropBox(null).subscribe(res =>{
            this.productCategoryTechnicals = res.Items as DropBoxDto[];
        });
    }
    onTechnicalSelectionChange(id: number) {
        this.technicalApi.GetDropBoxByTechnicalId(id).subscribe((res: any) => {
          this.technicalChilds = res.Items as DropBoxDto[];
          this.isTechnical = true;
        });
    }
    onSelectedProductCategoryTechnical(id: number) {
        this.technicalApi.GetById(id).subscribe((res: any) => {
            this.selectedProductCategoryTechnical = new DropBoxDto(res.Id, res.Title);
            this.onTechnicalSelectionChange(id);
        });
    }
    initProductImages() {
        this.isDisplayGalleria = false;
        this.uploadedFiles = [];
        this.images = [];
        this.productImageApi.GetByProductId(this.id).subscribe(res =>{
            res.ProductImages.forEach((element , index)=> {
                this.images.push({source:
                    Globals.productUploadBase + "Products/" +
                                  this.title + "/images" + 
                                  "/thumb/" + element.Photo ,
                                  width: '600px',
                                  height: '413px',
                                  alt:'', 
                                  element: element,
                                  title: this.title + " " + (index + 1)});
            });
            if(res.ProductImages.length == 0) {
                this.images.push({source:'assets/layout/images/default.png', 
                               alt:'', title:''});
            }
           this.isDisplayGalleria = true;
        });
    }
    initProductCatalog() {
        this.productCatalogApi.GetByProductId(this.id).subscribe(res =>{
            this.catalogs = res.ProductCatalogs as ProductCatalogDto[];
        });
    }
    initProductRelated() {
        this.productRelatedApi.GetByProductId(this.id).subscribe(res =>{
            this.relateds = res.ProductRelateds as ProductRelatedDto[];
        });
    }
    initProductTechnical() {
        this.productTechnicalApi.GetByProductId(this.id).subscribe(res =>{
            this.technicals = res.ProductTechnicals as ProductTechnicalDto[];
            this.onInitTechnicals();
        });
        
    }
    onCancel() {
    this.router.navigate(['products']);    
    }
    onUploadImage(file) {
        var productImage = new ProductImageDto();
        productImage.ProductId = this.id;
        this.productImageApi.Create(productImage, file).subscribe(res =>
        {
            this.initProductImages();
        });
    }
    onSaveRelated(model: ProductRelatedDto) {
        model.ProductId = this.id;
        this.productRelatedApi.Create(model).subscribe(res =>
        {
            this.initProductRelated();
        });
    }
    onSaveTechnical(model: ProductTechnicalDto) {
        model.ProductId = this.id;
        this.productTechnicalApi.Create(model).subscribe((res: any) =>
        {
            if ((res as ResponseDto).Exceptions.length) {
                this.appMessageService.showException(
                  (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
                return;
              }
            this.initProductTechnical();
        });
    }
    addCatalog(model: ProductCatalogDto) {
        this.catalogs = [...this.catalogs, model];
    }
    onUploadCatalog(file) {
        var productCatalog = new ProductCatalogDto();
        productCatalog.ProductId = this.id;
        productCatalog.Title = file.name;
        this.productCatalogApi.Create(productCatalog, file).subscribe(res =>
        {
            this.addCatalog(res);
        });
    }
    onRemoveImage(model: ProductImageDto) {
        this.productImageApi.Remove(model).subscribe(
            res => {
              if ((res as ResponseDto).Exceptions.length) {
                this.appMessageService.showException(
                  (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
                return;
              }
              this.appMessageService.showSuccess();
              this.initProductImages();
            },
            error2 => {
            }
          );
    }
    onRemoveCatalog(model: ProductCatalogDto) {
        this.productCatalogApi.Remove(model).subscribe(
            res => {
              if ((res as ResponseDto).Exceptions.length) {
                this.appMessageService.showException(
                  (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
                return;
              }
              this.appMessageService.showSuccess();
              this.initProductCatalog();
            },
            error2 => {
            }
          );
    }
    onRemoveRelated(model: ProductRelatedDto) {
        this.productRelatedApi.Remove(model).subscribe(
            res => {
              if ((res as ResponseDto).Exceptions.length) {
                this.appMessageService.showException(
                  (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
                return;
              }
              this.appMessageService.showSuccess();
              this.initProductRelated();
            },
            error2 => {
            }
          );
    }
    onRemoveTechnical(model: ProductTechnicalDto) {
        this.productTechnicalApi.Remove(model).subscribe(
            res => {
              if ((res as ResponseDto).Exceptions.length) {
                this.appMessageService.showException(
                  (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
                return;
              }
              this.appMessageService.showSuccess();
              this.initProductTechnical();
            },
            error2 => {
            }
          );
    }
    onDownload(model: ProductCatalogDto) {
        this.productCatalogApi.Download(model).subscribe(
            res => {
            },
            error2 => {
            }
          );
    }
    handleChange(e) {
        switch(e.index){
            case 0:
                this.tabIndex = 0;
                this.initProductImages();
                break;
            case 1: 
                this.tabIndex = 1;
                this.initProductTechnical();
                break;
            case 2: 
                this.tabIndex = 1;
                this.initProductCatalog();
                break;
            case 3: 
                this.tabIndex = 2;
                this.initProductRelated();
                break;  
            default:
                break;
        }
    }
    //#endregion
  
}