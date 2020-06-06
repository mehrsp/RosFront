import { ProductCategoryService } from '../../services/product-category.service';
import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserDto } from 'src/app/core/models/authentication/user.dto';
import { AppMessageService } from 'src/app/core/helpers/app-message.service';
import { ProductCategoryDto } from 'src/app/core/models/product/product-category.dto';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';

@Component({
  selector: 'app-product-category-edit',
  templateUrl: './product-category-edit.component.html'
})
export class ProductCategoryEditComponent implements OnInit, OnDestroy {

  //#region Properties
  parnetId: number;
  id: number;
  model: ProductCategoryDto;
  managers: UserDto[];
  supportWorkers: UserDto[];
  paramsSubs: any;
  title: string = "دسته بندی جدید";
  //#endregion Properties

  //#region Ctors
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productCategoryApi: ProductCategoryService,
    private appMessageService: AppMessageService,
  ) {
    this.parnetId = 0;
    this.model = new ProductCategoryDto();
  }
  //#endregion Ctors

  //#region Utilities
  private navigateToList() {
    this.router.navigate(['/product-categories']);
  }
  //#endregion Utilities

  //#region Lifecycle Hooks
  ngOnInit() {
    this.getCurrentModel();
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
          this.productCategoryApi.GetById(this.id).subscribe(
            res => {
              this.model = res as ProductCategoryDto;
              this.title = "ویرایش دسته بندی";
            }
          );
        }
        }
    );
  }

  onReturn() {
    this.navigateToList();
  }

  onSave(model: ProductCategoryDto) {
    this.productCategoryApi.Create(model).subscribe(
      res => {
        if ((res.model as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
           (res.model as ResponseDto).Exceptions[0].Title + "-" + (res.model as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.router.navigate(['/product-categories']).then(() => {
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
