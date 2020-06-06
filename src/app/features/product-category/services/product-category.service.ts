import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RosentisApiService } from 'src/app/core/http/rosentis-api.service';
import { BaseService } from 'src/app/core/base/base.service';



@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService extends BaseService {

  //#regions Ctors
  constructor(rosentisApi: RosentisApiService) {
    super(rosentisApi);
  }
  //#endregion Ctors

  //#regions Functions

  GetById(id: number): Observable<any> {
    return this.rosentisApi.post<any>('ProductCategories/FindById?id=' + id);
  }

  Get(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('ProductCategories/FindAll', body);
  }

  GetDropBox(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('ProductCategories/FillDropBox', body);
  }

  Create(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('ProductCategories/Save', body);
  }

  Remove(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('ProductCategories/Remove', body);
  }
  //#endregion Functions
}