import { CountryService } from '../../../info/services/country.service';
import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppMessageService } from 'src/app/core/helpers/app-message.service';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { TechnicalDto } from 'src/app/core/models/product/technical.dto';
import { TechnicalService } from '../../services/technical.service';

@Component({
  selector: 'app-technical-edit',
  templateUrl: './technical-edit.component.html'
})
export class TechnicalEditComponent implements OnInit, OnDestroy {

  //#region Properties
  id: number;
  model: TechnicalDto;
  paramsSubs: any;
  title: string = "مشخصه جدید";

  //#endregion Properties

  //#region Ctors
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private technicalApi: TechnicalService,
    private appMessageService: AppMessageService
  ) {
    this.model = new TechnicalDto();
  }
  //#endregion Ctors

  //#region Utilities
  private navigateToList() {
    this.router.navigate(['/technicals']);
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
        this.id = +params['id'];
        if (this.id && this.id > 0) {
          this.technicalApi.GetById(this.id).subscribe(
            res => {
              this.model = res as TechnicalDto;
              this.title = "ویرایش مشخصه";
            }
          );
        }
        }
    );
  }

  onReturn() {
    this.navigateToList();
  }

  onSave(model: TechnicalDto) {
    this.technicalApi.Create(model).subscribe(
      res => {
        if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
           (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.router.navigate(['/technicals']).then(() => {
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
