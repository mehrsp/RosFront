import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrandListComponent } from "./pages/brand-list/brand-list.component";
import { BrandEditComponent } from "./pages/brand-edit/brand-edit.component";

const DASHBOARD_ROUTES: Routes = [
    {
        path     : '',
        component: BrandListComponent
    },
    { path: 'create/:parentId', component: BrandEditComponent },
    { path: 'edit/:id', component: BrandEditComponent },
    { path: 'create', component: BrandEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class BrandRoutingModule { }