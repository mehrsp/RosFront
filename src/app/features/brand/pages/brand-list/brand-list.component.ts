import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { BrandDto } from 'src/app/core/models/brands/brand.dto';
import { BrandService } from '../../services/barand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html'
})
export class BrandListComponent implements OnInit {

  //#region Properties
  brands: BrandDto[];
  //#endregion Properties

  //#region Properties
  constructor(
    private router: Router,
    private BrandApi: BrandService,   
    private appMessageService: AppMessageService
  ) {
    this.brands = new Array<BrandDto>();
  }
  //#endregion Properties

  //#region Lifecycle Hooks
  ngOnInit() {
    this.getBrands();
  }
  //#endregion Lifecycle Hooks

  //#region Utilities
  private getBrands() {
    this.BrandApi.Get(null).subscribe(
        res => {
          this.brands = res.Brands as BrandDto[];
    });
  }
  
  //#endregion Utilities

  //#region Functions
  onInsert(): void {
    this.router.navigate(['brands/create']);
  }
  onUpdate(id: number) {
    this.router.navigate(['brands/edit', id]);
  }

  onDelete(model: BrandDto) {
    this.BrandApi.Remove(model).subscribe(
      res => {
        if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
            (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.appMessageService.showSuccess();
        this.getBrands();
      },
      error2 => {
      }
    );
  }
  //#endregion Functions

}
