import { TableModule } from 'primeng/table';
import { ProductCategoryTechnicalService } from './services/product-category-technical.service';
import { TechnicalModule } from './../technical/technical.module';
import { TechnicalRoutingModule } from './../technical/technical.routing.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProductCategoryListTableComponent } from './components/product-category-list/product-category-list-table.component';
import { ProductCategoryEditComponent } from './pages/product-category-edit/product-category-edit.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TreeModule} from 'primeng/tree';
import {ContextMenuModule} from 'primeng/contextmenu';


import { ProductCategoryService } from './services/product-category.service';
import { ProductCategoryEditFormComponent } from './components/product-category-form/product-category-edit-form.component';
import { CommonModule } from '@angular/common';
import { SidebarModule, ConfirmationService, KeyFilterModule, DropdownModule, CheckboxModule } from 'primeng/primeng';
import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ExpandCollapseService } from 'src/app/core/helpers/expand-collaps-tree-service';
import { ProductCategoryListComponent } from './pages/product-category-list/product-category-list.component';
import { ProductCategoryRoutingModule } from './product-category.routing.module';
import { ProductCategoryTechnicalListComponent } from './pages/product-category-technical-list/product-category-technical-list.component';
import { ProductCategoryTechnicalEditFormComponent } from './components/product-category-technical-form/product-category-technical-edit-form.component';
import { ProductCategoryTechnicalEditComponent } from './pages/product-category-technical-edit/product-category-technical-edit.component';
import { ProductCategoryTechnicalListTableComponent } from './components/product-category-technical-table/product-category-technical-list-table.component';


@NgModule({
    declarations: [
        ProductCategoryListComponent,
        ProductCategoryEditFormComponent,
        ProductCategoryEditComponent,
        ProductCategoryListTableComponent,
        ProductCategoryTechnicalListComponent,
        ProductCategoryTechnicalEditFormComponent,
        ProductCategoryTechnicalEditComponent,
        ProductCategoryTechnicalListTableComponent
    ],
    imports     : [
        ProductCategoryRoutingModule,
        FormsModule,
        ToastModule,
        CommonModule,
        TreeModule,
        ContextMenuModule,
        ButtonModule,
        SidebarModule,
        KeyFilterModule,
        ConfirmDialogModule,
        DropdownModule,
        TableModule,
        CheckboxModule
    ],
    entryComponents: [ProductCategoryEditFormComponent],
    providers: [ProductCategoryService, ConfirmationService,AppMessageService,ExpandCollapseService,
        ProductCategoryTechnicalService]
})
export class ProductCategoryModule
{
}

