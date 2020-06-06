import { TechnicalService } from './../../services/technical.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { TechnicalDto } from 'src/app/core/models/product/technical.dto';

@Component({
  selector: 'app-technical-child-list',
  templateUrl: './technical-child-list.component.html'
})
export class TechnicalChildListComponent implements OnInit {

  //#region Properties
  paramsSubs: any;
  technicalChilds: TechnicalDto[];
  technicalId: number;
  technicalName: string;
  //#endregion Properties

  //#region Properties
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private technicalApi: TechnicalService,   
    private appMessageService: AppMessageService
  ) {
    this.technicalChilds = new Array<TechnicalDto>();
  }
  //#endregion Properties

  //#region Lifecycle Hooks
  ngOnInit() {
    this.getCurrentModel();
  }
  //#endregion Lifecycle Hooks

  //#region Utilities
  private getTechnicalChilds(id: number) {
    this.technicalApi.GetByTechnicalId(id).subscribe(
        res => {
          this.technicalChilds = res.Technicals as TechnicalDto[];
    });
  }
  private getCurrentModel() {
    this.paramsSubs = this.route.params.subscribe(
      params => {
        this.technicalId = +params['technicalId'];
        this.technicalApi.GetById(this.technicalId).subscribe((res:any) => {
          this.technicalName = res.Title;
          this.getTechnicalChilds(this.technicalId);
        });
        }
    );
  }  
  //#endregion Utilities

  //#region Functions
  onInsert(): void {
    this.router.navigate(['/technicals/childs/create', this.technicalId]);
  }
  onCancel() {
    this.router.navigate(['/technicals']);
  }
  onUpdate(id: number) {
    this.router.navigate(['technicals/childs/edit', id]);
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
        this.getTechnicalChilds(model.ParentId);
      },
      err => {
        this.appMessageService.showException(err);
      }
    );
  }
  //#endregion Functions

}
