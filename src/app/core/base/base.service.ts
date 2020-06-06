import { RosentisApiService } from '../http/rosentis-api.service';
import Globals from '../helpers/globals';

export class BaseService {

  //#region Properties
  token: string;
  progress$: any;
  progress: any;
  progressObserver: any;
  //#endregion Properties

  //#region Ctors
  constructor(public rosentisApi: RosentisApiService) {
    this.token = `${Globals.currentUser.access_token}`;
  }
  //#endregion Ctors
}
