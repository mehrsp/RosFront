import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RosentisApiService } from 'src/app/core/http/rosentis-api.service';
import { BaseService } from 'src/app/core/base/base.service';



@Injectable({
  providedIn: 'root'
})
export class ProductCategoryTechnicalService extends BaseService {

  //#regions Ctors
  constructor(rosentisApi: RosentisApiService) {
    super(rosentisApi);
  }
  //#endregion Ctors

  //#regions Functions

  GetById(id: number): Observable<any> {
    return this.rosentisApi.post<any>('ProductCategoryTechnicals/FindById?id=' + id);
  }

  GetByProductCategoryId(id: number): Observable<any> {
    return this.rosentisApi.post<any>('ProductCategoryTechnicals/FindByProductCategoryId?id=' + id);
  }

  Get(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('ProductCategoryTechnicals/FindAll', body);
  }

  Create(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('ProductCategoryTechnicals/Save', body);
  }

  Remove(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('ProductCategoryTechnicals/Remove', body);
  }
  //#endregion Functions
}