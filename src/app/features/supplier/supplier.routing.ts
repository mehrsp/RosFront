import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SupplierListComponent } from "./pages/supplier-list/supplier-list.component";
import { SupplierEditComponent } from "./pages/supplier-edit/supplier-edit.component";

const DASHBOARD_ROUTES: Routes = [
    {
        path     : '',
        component: SupplierListComponent
    },
    { path: 'edit/:id', component: SupplierEditComponent },
    { path: 'create', component: SupplierEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class SupplierRoutingModule { }