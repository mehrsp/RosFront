import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RosentisApiService } from 'src/app/core/http/rosentis-api.service';
import { BaseService } from 'src/app/core/base/base.service';
import Globals from 'src/app/core/helpers/globals';



@Injectable({
  providedIn: 'root'
})
export class SlideShowService extends BaseService {

  //#regions Ctors
  constructor(rosentisApi: RosentisApiService) {
    super(rosentisApi);
  }
  //#endregion Ctors

  //#regions Functions

  GetById(id: number): Observable<any> {
    return this.rosentisApi.post<any>('SlideShows/Find?id=' + id);
  }
  
  Get(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post<any>('SlideShows/FindAll', body);
  }

  Create( model: any,  photo: File[]): Observable<any> {
    console.log(this.token)
    return Observable.create(observer => {
      const formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      for (let i = 0; i < photo.length; i++) {
        formData.append('photo', photo[i], photo[i].name);
      }

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

      xhr.open('POST', Globals.api + '\n' + 'SlideShows/Save', true);
      xhr.setRequestHeader('Authorization', this.token);
      const serverFileName = xhr.send(formData);
      return serverFileName;
    });
  }

  Remove(model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this.rosentisApi.post('SlideShows/Remove', body);
  }

  //#endregion Functions
}