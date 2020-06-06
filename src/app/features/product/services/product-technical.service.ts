import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RosentisApiService } from 'src/app/core/http/rosentis-api.service';
import { BaseService } from 'src/app/core/base/base.service';



@Injectable({
  providedIn: 'root'
})
export class ProductTechnicalService extends BaseService {

  //#regions Ctors
  constructor(rosentisApi: RosentisApiService) {
    super(rosentisApi);
  }
  //#endregion Ctors

  //#regions Functions
  GetByProductId(id: number): Observable<any> {
    return this.rosentisApi.post<any>('ProductTechnicals/FindByProductId?id=' + id);
  }

  GetById(id: number): Observable<any> {
    return this.rosentisApi.post<any>('ProductTechnicals/FindById?id=' + id);
  }

  Get(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('ProductTechnicals/FindAll', body);
  }

  Create(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('ProductTechnicals/Save', body);
  }

  Remove(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('ProductTechnicals/Remove', body);
  }

  CreateTechnical(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('ProductTechnicals/SaveTechnicals', body);
  }
  //#endregion Functions
}