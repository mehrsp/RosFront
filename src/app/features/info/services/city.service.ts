import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "src/app/core/base/base.service";
import { RosentisApiService } from "src/app/core/http/rosentis-api.service";


@Injectable()
export class CityService extends BaseService {

  //#region Ctors
  constructor(RosentisApi: RosentisApiService) {
    super(RosentisApi);
  }
  //#endregion Ctors

  //#region Functions
  Get(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('Cities/FindAll', body);
  }

  GetDropBox(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('Cities/FillDropBox', body);
  }

  GetByProvinceId(provinceId: number): Observable<any> {
    return this.rosentisApi.post<any>('Cities/FindByProvinceId?provinceId=' + provinceId);
  }
  //#endregion Functions
}