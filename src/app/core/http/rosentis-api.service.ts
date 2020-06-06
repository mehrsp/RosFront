import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Globals from '../helpers/globals';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RosentisApiService {

  //#region Properties
  token: string;
  //#endregion Properties

  //#region Ctors
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
  }
  //#region Ctors

  //#region Utilities
  private trimUrl(url: string): string {
    if (!url.endsWith('/'))
      url += '/';

    return url;
  }

  private getJsonHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Globals.currentUser.access_token}`,
      'Access-Control-Allow-Origin': '*'
    });
  }
  
  private getLoginHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  }
  //#endregion Utilities

  //#region Functions
  get<T>(url): Observable<T> {
    return this.http.get<T>(Globals.api + this.trimUrl(url));
  }


  post<T>(url: string, data?: any): Observable<any> {
    if (url.indexOf('login') >= 0)
      return this.http.post<T>(Globals.apiLogin + url, data, { headers: this.getLoginHeaders() });

    return this.http.post<T>(Globals.api + url, data, { headers: this.getJsonHeaders() });
  }

  delete<T>(url: string, id: number): Observable<any> {
    return this.http.delete<any>(Globals.api + this.trimUrl(url) + id);
  }
  //#endregion Functions
}

