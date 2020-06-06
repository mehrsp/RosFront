import { ProductCategoryTechnicalListComponent } from './pages/product-category-technical-list/product-category-technical-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductCategoryEditComponent } from "./pages/product-category-edit/product-category-edit.component";
import { ProductCategoryListComponent } from './pages/product-category-list/product-category-list.component';
import { ProductCategoryTechnicalEditComponent } from './pages/product-category-technical-edit/product-category-technical-edit.component';


const DASHBOARD_ROUTES: Routes = [
    {
        path     : '',
        component: ProductCategoryListComponent
    },
    { path: 'create/:parentId', component: ProductCategoryEditComponent },
    { path: 'edit/:id', component: ProductCategoryEditComponent },
    { path: 'create', component: ProductCategoryEditComponent },
    { path: 'technicals/:productCategoryId', component: ProductCategoryTechnicalListComponent},
    { path: 'technicals/create/:productCategoryId', component: ProductCategoryTechnicalEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class ProductCategoryRoutingModule { }