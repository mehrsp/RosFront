import { NgModule } from "@angular/core";

import { LoginComponent } from "./pages/login/login.component";
import { RouterModule, Route } from "@angular/router";

const ACCOUNT_ROUTES: Route[] = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    // { path: 'changepassword', component: ChangePasswordComponent },
    // { path: 'profile', component: ProfileComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(ACCOUNT_ROUTES)],
    exports: [RouterModule],
    declarations: []
})
export class AccountRoutingModule { }
