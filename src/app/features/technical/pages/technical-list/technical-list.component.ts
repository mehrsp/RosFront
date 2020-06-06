import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { TechnicalDto } from 'src/app/core/models/product/technical.dto';
import { TechnicalService } from '../../services/technical.service';

@Component({
  selector: 'app-technical-list',
  templateUrl: './technical-list.component.html'
})
export class TechnicalListComponent implements OnInit {

  //#region Properties
  paramsSubs: any;
  technicals: TechnicalDto[];
  productCategoryId: number;
  //#endregion Properties

  //#region Properties
  constructor(
    private router: Router,
    private technicalApi: TechnicalService,   
    private appMessageService: AppMessageService
  ) {
    this.technicals = new Array<TechnicalDto>();
  }
  //#endregion Properties

  //#region Lifecycle Hooks
  ngOnInit() {
    this.getTechnicals();
  }
  //#endregion Lifecycle Hooks

  //#region Utilities
  private getTechnicals() {
    this.technicalApi.Get(null).subscribe(
        res => {
          this.technicals = res.Technicals as TechnicalDto[];
    });
  }
  //#endregion Utilities

  //#region Functions
  onInsert(): void {
    this.router.navigate(['technicals/create']);
  }
  onUpdate(id: number) {
    this.router.navigate(['technicals/edit', id]);
  }

  onDelete(model: TechnicalDto) {
    this.technicalApi.Remove(model).subscribe(
      res => {
        if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
            (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.appMessageService.showSuccess();
        this.getTechnicals();
      },
      err => {
        this.appMessageService.showException(err);
      }
    );
  }
  //#endregion Functions

}
