import { ProductAttachmentComponent } from './pages/product-attachment/product-attachment.component';
import { ProductDetailListComponent } from './pages/product-detail-list/product-detail-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductEditComponent } from "./pages/product-edit/product-edit.component";
import { ProductListComponent } from './pages/product-list/product-list.component';


const DASHBOARD_ROUTES: Routes = [
    {
        path     : '',
        component: ProductListComponent
    },
    { path: 'product-category/:pc-id', component: ProductListComponent },
    { path: 'create/:id', component: ProductEditComponent },
    { path: 'create-product/:pc-id', component: ProductEditComponent },
    { path: 'create', component: ProductEditComponent },
    { path: 'product-detail/:id', component: ProductDetailListComponent },
    { path: 'product-attachment/:id', component: ProductAttachmentComponent },    
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class ProductRoutingModule { }