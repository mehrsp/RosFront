import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

const Notification_ROUTES: Route[] = [
  // { path: '', component: ProjectListComponent },
  // { path: 'edit/:id', component: ProjectEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(Notification_ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class NotificationRoutingModule { }
