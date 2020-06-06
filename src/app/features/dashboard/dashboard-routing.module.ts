import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const DASHBOARD_ROUTES: Routes = [
  { path: '' },
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class DashboardRoutingModule { }
