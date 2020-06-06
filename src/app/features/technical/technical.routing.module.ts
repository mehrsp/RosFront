import { TechnicalChildListComponent } from './pages/technical-child-list/technical-child-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TechnicalListComponent } from "./pages/technical-list/technical-list.component";
import { TechnicalEditComponent } from "./pages/technical-edit/technical-edit.component";
import { TechnicalChildListTableComponent } from "./components/technical-child-table/technical-child-list-table.component";
import { TechnicalChildEditComponent } from "./pages/technical-child-edit/technical-child-edit.component";

const DASHBOARD_ROUTES: Routes = [
    {
        path     : '',
        component: TechnicalListComponent
    },
    { path: 'edit/:id', component: TechnicalEditComponent },
    { path: 'create', component: TechnicalEditComponent },
    { path: 'childs/:technicalId', component: TechnicalChildListComponent},
    { path: 'childs/create/:technicalId', component: TechnicalChildEditComponent },
    { path: 'childs/edit/:id', component: TechnicalChildEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class TechnicalRoutingModule { }