import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SlideShowListComponent } from "./pages/slides-list/slides-list.component";

const DASHBOARD_ROUTES: Routes = [
    {
        path     : '',
        component: SlideShowListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class SlideShowRoutingModule { }