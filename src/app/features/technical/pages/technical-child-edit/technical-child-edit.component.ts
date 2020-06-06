import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TechnicalService } from './../../services/technical.service';
import { TechnicalDto } from 'src/app/core/models/product/technical.dto';
import { AppMessageService } from 'src/app/core/helpers/app-message.service';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { DropBoxDto } from 'src/app/core/models/base/drop-box-Dto';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-technical-child-edit',
  templateUrl: './technical-child-edit.component.html'
})
export class TechnicalChildEditComponent implements OnInit, OnDestroy {

  //#region Properties
  model: TechnicalDto;
  paramsSubs: any;
  childTitle: string = "افزودن مقدار جدید";
  technicalId: number;
  //#endregion Properties

  //#region Ctors
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appMessageService: AppMessageService,
    private technicalApi: TechnicalService
  ) {
    this.model = new TechnicalDto();
  }
  //#endregion Ctors

  //#region Utilities
  private navigateToList() {
    console.log(this.technicalId)
    this.router.navigate(['technicals/childs', this.technicalId]);
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
        this.technicalId = +params['technicalId'];
        // if (this.id && this.id > 0) {
        //   this.technicalApi.GetById(this.id).subscribe(
        //     res => {
        //       this.model = res as TechnicalDto;
        //       this.title = "ویرایش مشخصه";
        //     }
        //   );
        // }
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
        this.router.navigate(['technicals/childs', this.technicalId]).then(() => {
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
