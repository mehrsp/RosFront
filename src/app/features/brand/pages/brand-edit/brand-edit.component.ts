import { CountryService } from './../../../info/services/country.service';
import { BrandDto } from './../../../../core/models/brands/brand.dto';
import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserDto } from 'src/app/core/models/authentication/user.dto';
import { AppMessageService } from 'src/app/core/helpers/app-message.service';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { BrandService } from '../../services/barand.service';
import { DropBoxDto } from 'src/app/core/models/base/drop-box-Dto';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html'
})
export class BrandEditComponent implements OnInit, OnDestroy {

  //#region Properties
  parnetId: number;
  id: number;
  model: BrandDto;
  managers: UserDto[];
  supportWorkers: UserDto[];
  paramsSubs: any;
  uploadedFiles: File[] = [];
  countries: DropBoxDto[];
  title: string = "برند جدید";

  //#endregion Properties

  //#region Ctors
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private BrandApi: BrandService,
    private appMessageService: AppMessageService,
    private CountryApi: CountryService
  ) {
    this.parnetId = 0;
    this.model = new BrandDto();
    this.countries = new Array<DropBoxDto>();
  }
  //#endregion Ctors

  //#region Utilities
  private navigateToList() {
    this.router.navigate(['/brands']);
  }
  //#endregion Utilities

  //#region Lifecycle Hooks
  ngOnInit() {
    this.getCountries();
  }

  ngOnDestroy() {
    // this.paramsSubs.unsubscribe();
  }
  //#endregion Lifecycle Hooks

  //#region Functions
  private getCurrentModel() {
    this.paramsSubs = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        if (this.id && this.id > 0) {
          this.BrandApi.GetById(this.id).subscribe(
            res => {
              this.model = res as BrandDto;
              this.title = "ویرایش برند";
            }
          );
        }
        }
    );
  }

  onReturn() {
    this.navigateToList();
  }

  private getCountries(){
    this.CountryApi.GetDropBox(null).subscribe(res => {
      this.countries = res.Items as DropBoxDto[];
      this.getCurrentModel();   
    });
  }

  onSave(model: BrandDto) {
    var photo = model.UploadedFiles;
    model.UploadedFiles = null;
    this.BrandApi.Create(model, photo).subscribe(
      res => {
        if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
           (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.router.navigate(['/brands']).then(() => {
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
