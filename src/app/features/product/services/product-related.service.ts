import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RosentisApiService } from 'src/app/core/http/rosentis-api.service';
import { BaseService } from 'src/app/core/base/base.service';



@Injectable({
  providedIn: 'root'
})
export class ProductRelatedService extends BaseService {

  //#regions Ctors
  constructor(rosentisApi: RosentisApiService) {
    super(rosentisApi);
  }
  //#endregion Ctors

  //#regions Functions
  GetByProductId(id: number): Observable<any> {
    return this.rosentisApi.post<any>('ProductRelateds/FindByProductId?id=' + id);
  }

  GetById(id: number): Observable<any> {
    return this.rosentisApi.post<any>('ProductRelateds/FindById?id=' + id);
  }

  Get(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('ProductRelateds/FindAll', body);
  }

  Create(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('ProductRelateds/Save', body);
  }

  Remove(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('ProductRelateds/Remove', body);
  }

  CreateRelated(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('ProductRelateds/SaveRelateds', body);
  }
  //#endregion Functions
}