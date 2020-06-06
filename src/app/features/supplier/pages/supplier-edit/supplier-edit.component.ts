import { CityDto } from 'src/app/core/models/Info/Address/city.dto';
import { CityService } from './../../../info/services/city.service';
import { SelectItem } from 'primeng/primeng';
import { ProvinceDto } from './../../../../core/models/Info/Address/province.dto';
import { AppMessageService } from './../../../../core/helpers/app-message.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { SupplierDto } from "src/app/core/models/members/supplier.dto";
import { ActivatedRoute, Router } from "@angular/router";
import { SupplierService } from "../../services/supplier.service";
import { UserService } from 'src/app/features/account/services/user.service';
import { UserDto } from 'src/app/core/models/authentication/user.dto';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { ProvinceService } from 'src/app/features/info/services/provine.service';
import { DropBoxDto } from 'src/app/core/models/base/drop-box-Dto';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html'
})
export class SupplierEditComponent implements OnInit, OnDestroy {

  //#region Properties
  id: number;
  model: SupplierDto;
  paramsSubs: any;
  activeIndex: number = 0;
  title: string = "تامین کننده جدید";
  provinces: DropBoxDto[];
  cities: DropBoxDto[];
  memberId: number = 0;
  isDateRender: boolean = false;
  isSaveUser: boolean = true;



  //#endregion Properties

  //#region Ctors
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private SupplierApi: SupplierService,
    private appMessageService: AppMessageService,
    private userApi: UserService,
    private provinceApi: ProvinceService,
    private cityApi: CityService

  ) {
    this.model = new SupplierDto();
    this.provinces = new Array<DropBoxDto>();
    this.cities = new Array<DropBoxDto>();
  }
  //#endregion Ctors

  //#region Utilities
  private navigateToList() {
    this.router.navigate(['/suppliers']);
  }
  //#endregion Utilities

  //#region Lifecycle Hooks
  ngOnInit() {
    this.initDropBoxes();
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
          this.SupplierApi.GetById(this.id).subscribe(
            res => {
              this.model = res as SupplierDto;
              this.title = "ویرایش تامین کننده";
              if(this.model.Province != null)
              {
                this.onChangeProvince(this.model.Province.Id);
              }else{
              this.isDateRender = true;  

              }

            }
          );
        }else{
          this.isDateRender = true;  
        }
        }
    );
  }

  onReturn() {
    this.navigateToList();
  }

  initDropBoxes() {
    this.getProvinces();
  }

  getProvinces() {
    this.provinceApi.GetDropBox(null).subscribe( res => {
      this.provinces = res.Items as DropBoxDto[];
    this.getCurrentModel();
    });    
  }

  cleanCities() { 
    this.cities = new Array<DropBoxDto>();
  }
  

  onChangeProvince(Id) {
    this.cityApi.GetByProvinceId(Id).subscribe(res => {
    this.cleanCities();
    this.cities = res.Items as DropBoxDto[];
    this.isDateRender = true;  
    });
  }

  onSaveUser(model: UserDto) {
    this.isSaveUser = false;
    this.userApi.CreateUser(model).subscribe(
      res => {
        this.activeIndex = 1;
        this.memberId = res.UserId;
        this.isSaveUser = true;
      },
      err => {
        this.appMessageService.showException(err.error.ExceptionMessage);
        this.isSaveUser = true;
      }
    );
  }
  onSave(model: SupplierDto) {
    this.SupplierApi.Create(model).subscribe(
      res => {
        if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
           (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.router.navigate(['/suppliers']).then(() => {
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
