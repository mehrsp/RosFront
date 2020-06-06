import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from "./pages/login/login.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { PasswordChangeFormComponent } from "./components/password-change-form/password-change-form.component";
import { ProfileFormComponent } from "./components/profile-form/profile-form.component";

@NgModule({
    declarations: [

        LoginComponent,
        LoginFormComponent,
        PasswordChangeFormComponent,
        ProfileFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    providers: []
})
export class AccountModule { }
