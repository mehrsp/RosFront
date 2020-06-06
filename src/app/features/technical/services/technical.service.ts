import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RosentisApiService } from 'src/app/core/http/rosentis-api.service';
import { BaseService } from 'src/app/core/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService extends BaseService {

  //#regions Ctors
  constructor(rosentisApi: RosentisApiService) {
    super(rosentisApi);
  }
  //#endregion Ctors

  //#regions Functions

  GetById(id: number): Observable<any> {
    return this.rosentisApi.post<any>('Technicals/FindById?id=' + id);
  }

  GetByTechnicalId(id: number): Observable<any> {
    return this.rosentisApi.post<any>('Technicals/FindByTechnicalId?id=' + id);
  }

  Get(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('Technicals/FindAll', body);
  }

  GetDropBox(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('Technicals/FillDropBox', body);
  }

  GetDropBoxByTechnicalId(id: number): Observable<any> {
    return this.rosentisApi.post<any>('Technicals/FillDropBoxByTechnicalId?id='+ id);
  }

  Create(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('Technicals/Save', body);
  }

  Remove(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('Technicals/Remove', body);
  }
  //#endregion Functions
}