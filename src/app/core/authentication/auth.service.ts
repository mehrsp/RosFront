
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { RosentisApiService } from "../http/rosentis-api.service";
import { LoginDto } from "../models/authentication/login.dto";
import { AuthenticationDto } from "../models/authentication/authentication.dto";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    //#region Properties
    private loggedIn = new BehaviorSubject<boolean>(false);
    //#endregion Properties

    //#region Ctors
    constructor(
        private router: Router,
        private rosentisApi: RosentisApiService
    ) { }
    //#endregion Ctors

    //#region Properties
    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    login(model: LoginDto) {
        if (model.userName !== '' && model.password !== '') {
            const body = `username=${model.userName}&password=${model.password}&grant_type=${model.grand_type}`;
            this.rosentisApi.post<LoginDto>('login', body).subscribe(
                res => {
                    var roles: string = res.roles;
                    roles = roles.replace("[\"", "");
                    roles = roles.replace("\"]", "");
                    roles = roles.replace(/['"]+/g, "");
                    res.roles = roles.split(',');
                    localStorage.setItem('Authentication', JSON.stringify(res));
                    this.loggedIn.next(true);
                    this.router.navigate(['pages/dashboard']);
                },
                err => {
                    alert('Username or password is incorrect!')
                }
            );
        }
    }

    logout() {
        localStorage.removeItem('Authentication');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
    //#endregion Properties
    
}

