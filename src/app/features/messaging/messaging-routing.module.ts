import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

const Messaging_ROUTES: Route[] = [
  // { path: '', component: ProjectListComponent },
  // { path: 'edit/:id', component: MessagingEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(Messaging_ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class MessagingRoutingModule { }
