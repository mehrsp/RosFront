import { LoginDto } from '../../../../core/models/authentication/login.dto';
import { AuthService } from "../../../../core/authentication/auth.service";
import { LoginService } from '../../services/login.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
  })
export class LoginComponent {

    constructor(
        private authApi: AuthService,
        private loginApi: LoginService
    ) { }

    onLogin(loginModel: LoginDto) {
        this.authApi.login(loginModel);
    }
}
