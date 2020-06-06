import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "src/app/core/base/base.service";
import { RosentisApiService } from "src/app/core/http/rosentis-api.service";


@Injectable()
export class CountryService extends BaseService {

  //#region Ctors
  constructor(RosentisApi: RosentisApiService) {
    super(RosentisApi);
  }
  //#endregion Ctors

  //#region Functions
  GetDropBox(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('Countries/FillDropBox', body);
  }
  //#endregion Functions
}