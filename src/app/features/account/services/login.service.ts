import { Injectable } from "@angular/core";
import { RosentisApiService } from "src/app/core/http/rosentis-api.service";


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private rosentisApi: RosentisApiService){

    }
}
