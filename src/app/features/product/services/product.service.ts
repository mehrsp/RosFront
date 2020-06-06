import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RosentisApiService } from 'src/app/core/http/rosentis-api.service';
import { BaseService } from 'src/app/core/base/base.service';
import Globals from 'src/app/core/helpers/globals';



@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  //#regions Ctors
  constructor(rosentisApi: RosentisApiService) {
    super(rosentisApi);
  }
  //#endregion Ctors

  //#regions Functions

  GetById(id: number): Observable<any> {
    return this.rosentisApi.post<any>('Products/FindById?id=' + id);
  }

  GetByProudctCategoryId(id: number): Observable<any> {
    return this.rosentisApi.post<any>('Products/FindByProductCategoryId?id=' + id);
  }

  Get(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('Products/FindAll', body);
  }

  Create(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('Products/Save', body);
  }

  Remove(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('Products/Remove', body);
  }

  CreateDetail(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('Products/SaveDetails', body);
  }
  //#endregion Functions
}