import { AuthenticationDto } from "../models/authentication/authentication.dto";

export default class Globals {

  //#region Propertieshttp://localhost:53818/
  // private static _apiLogin = 'http://localhost:53818/';
  // private static _api = 'http://localhost:53818/api/';
  private static _apiLogin = 'http://rosentis.ir/api/';
  private static _api = 'http://rosentis.ir/api/';
  private static _fileUploadBase = Globals._apiLogin + 'Content/Blobs/';
  private static _productUploadBase = Globals._apiLogin + 'Content/';
  static get apiLogin() {
    return this._apiLogin;
  }
  
  static get api() {
    return this._api;
  }
  static get fileUploadBase() {
    return this._fileUploadBase;
  }
  static get productUploadBase() {
    return this._productUploadBase;
  }
  static get currentUser() {
    var result = new AuthenticationDto();
    if (localStorage.getItem('Authentication') !== 'undefined') {
      result = JSON.parse((localStorage.getItem('Authentication'))) as AuthenticationDto;
    }
    return result;
  }
  //#endregion Properties

  //#region Ctors
  constructor() {
  }
  //#endregion Ctors
}


