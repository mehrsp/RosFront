import { Injectable } from "@angular/core";
import { BaseService } from "src/app/core/base/base.service";
import { RosentisApiService } from "src/app/core/http/rosentis-api.service";
import { Observable } from "rxjs";

@Injectable()
export class UserService extends BaseService {
  //#regions Ctors
  constructor(rosentisApi: RosentisApiService) {
    super(rosentisApi);
  }
  //#endregion Ctors

  //#regions Functions

  CreateUser(userInfo: any): Observable<any> {
    let body = JSON.stringify(userInfo);
    return this.rosentisApi.post('user/CreateUser', body);
  }
  ActiveUser(user: any): Observable<any> {
    let body = JSON.stringify(user);
    return this.rosentisApi.post('user/ActiveUser', body);
  }
  //#endregion Functions
}
