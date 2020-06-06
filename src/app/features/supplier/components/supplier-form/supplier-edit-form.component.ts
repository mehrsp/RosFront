import { SelectItem } from 'primeng/api';
import { UserDto } from './../../../../core/models/authentication/user.dto';
import { MenuItem } from 'primeng/primeng';
import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';

import { SupplierDto } from './../../../../core/models/members/supplier.dto';
import { BaseComponent } from '../../../../core/base/base.component';
import { Common as enums } from '../../../../core/common/enums';
import { DropBoxDto } from 'src/app/core/models/base/drop-box-Dto';

@Component({
  selector:     'app-supplier-edit-form',
  templateUrl:  './supplier-edit-form.component.html'
})
export class SupplierEditFormComponent extends BaseComponent implements OnInit  {
  
  //#region Properties
  private model: SupplierDto;
  private userModel: UserDto;
  items: MenuItem[];
  companyTypes: SelectItem[];
  userName: string;
  selectedCity: DropBoxDto;
  selectedProvince: DropBoxDto;

  
  @Input() 
  title: String; 

  @Input()
  activeIndex: number;

  @Input()
  provinces: DropBoxDto[];

  @Input()
  cities: DropBoxDto[];

  @Input()
  isSaveUser: boolean;

  @Input()
  memberId: number;

  @Input() 
  set editModel(m: SupplierDto) { this.model = m; if(m.City != null){
    this.selectedProvince = new DropBoxDto(m.Province.Id, m.Province.Name);this.selectedCity = new DropBoxDto(m.City.Id, m.City.Name);};  this.isTrue = true; if(m.User != null) {this.memberId = m.Id; this.activeIndex = 1;this.userName ='نام کاربری : ' +  m.User.UserName;}}
  get editModel() { return this.model;}

  @Output() onReturn: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<SupplierDto> = new EventEmitter();
  @Output() onSaveUser: EventEmitter<UserDto> = new EventEmitter();
  @Output() onChangeProvince: EventEmitter<number> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor() {
    super();
    this.model = new SupplierDto();
    this.userModel = new UserDto();
    this.companyTypes = Array<SelectItem>();  
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    this.initItems();
    this.initComponentType();
  }
  
  //#endregion Lifecycle Hooks

  //#region Utilities
  initItems(){
    this.items = [
      {label: 'ایجاد کاربری'},
      {label: 'تکمیل اطلاعات'},
      {label: 'راه های ارتباطی'}  ];
  }
  initComponentType() {
    this.companyTypes = [
      { label: "وارد کننده" , value: 1 },
      { label: "تولید کننده" , value: 2 }, 
      { label: "توزیع کننده" , value: 3 },
    ];
  }
  //#endregion Utilities

  //#region Functions
  onNext() {
    this.activeIndex++;
  }  
  onPrevious() {
    this.activeIndex--;    
  }
  onSubmitUser(event) {
    if(true){
      this.userModel.IsActive = true;
      this.userModel.Member.MemberType = enums.MemberType.Company;
      this.onSaveUser.next(this.userModel);
    }    
  }
  
  onSubmit(event) {
    if (true) {
      this.model.Id = this.memberId;
      this.model.CityId = this.selectedCity.Id;
      this.model.ProvinceId = this.selectedProvince.Id;
      this.onSave.next(this.model);
    }
  }

  onChangeProvinces(event) {
    this.onChangeProvince.next(this.selectedProvince.Id);
  }

  onCancel() {
    this.onReturn.next(true);
  }
  //#endregion Functions
}
