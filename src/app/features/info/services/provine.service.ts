import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "src/app/core/base/base.service";
import { RosentisApiService } from "src/app/core/http/rosentis-api.service";


@Injectable()
export class ProvinceService extends BaseService {

  //#region Ctors
  constructor(RosentisApi: RosentisApiService) {
    super(RosentisApi);
  }
  //#endregion Ctors

  //#region Functions
  Get(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('Provinces/FindAll', body);
  }

  GetDropBox(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('Provinces/FillDropBox', body);
  }
  //#endregion Functions
}