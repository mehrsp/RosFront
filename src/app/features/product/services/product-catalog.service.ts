import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RosentisApiService } from 'src/app/core/http/rosentis-api.service';
import { BaseService } from 'src/app/core/base/base.service';
import Globals from 'src/app/core/helpers/globals';



@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService extends BaseService {

  //#regions Ctors
  constructor(rosentisApi: RosentisApiService) {
    super(rosentisApi);
  }
  //#endregion Ctors

  //#regions Functions

  GetById(id: number): Observable<any> {
    return this.rosentisApi.post<any>('ProductCatalogs/FindById?id=' + id);
  }

  GetByProductId(id: number): Observable<any> {
    return this.rosentisApi.post<any>('ProductCatalogs/FindByProductId?id=' + id);
  }

  Get(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('ProductCatalogs/FindAll', body);
  }

  Create( model: any,  file): Observable<any> {
    return Observable.create(observer => {
      const formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

     formData.append('file', file, file.name);

      formData.append('data',JSON.stringify(model));
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };

      xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);


      };

      xhr.open('POST', Globals.api + '\n' + 'ProductCatalogs/Save', true);
      xhr.setRequestHeader('Authorization', this.token);
      const serverFileName = xhr.send(formData);
      return serverFileName;
    });
  }

  Remove(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('ProductCatalogs/Remove', body);
  }

  Download(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('ProductCatalogs/Download', body);
  }

  //#endregion Functions
}