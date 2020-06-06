import { TechnicalChildListTableComponent } from './components/technical-child-table/technical-child-list-table.component';
import { TechnicalChildEditFormComponent } from './components/technical-child-form/technical-child-edit-form.component';
import { TechnicalChildEditComponent } from './pages/technical-child-edit/technical-child-edit.component';
import { ProductCategoryService } from './../product-category/services/product-category.service';
import { ProductCategoryTechnicalService } from './../product-category/services/product-category-technical.service';
import { TechnicalListComponent } from './pages/technical-list/technical-list.component';
import { DropdownModule } from 'primeng/dropdown';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TableModule } from 'primeng/table';
import { ConfirmationService, KeyFilterModule } from 'primeng/primeng';

import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { TechnicalEditFormComponent } from './components/technical-form/technical-edit-form.component';
import { TechnicalEditComponent } from './pages/technical-edit/technical-edit.component';
import { TechnicalListTableComponent } from './components/technical-table/technical-list-table.component';
import { TechnicalRoutingModule } from './technical.routing.module';
import { TechnicalService } from './services/technical.service';
import { TechnicalChildListComponent } from './pages/technical-child-list/technical-child-list.component';

@NgModule({
    declarations: [
        TechnicalListComponent,
        TechnicalEditFormComponent,
        TechnicalEditComponent,
        TechnicalListTableComponent,
        TechnicalChildListComponent,
        TechnicalChildEditComponent,
        TechnicalChildEditFormComponent,
        TechnicalChildListTableComponent
    ],
    imports     : [
        TechnicalRoutingModule,
        FormsModule,
        ToastModule,
        CommonModule,
        ContextMenuModule,
        ButtonModule,
        KeyFilterModule,
        ConfirmDialogModule,
        TableModule
    ],
    providers: [TechnicalService, ConfirmationService,AppMessageService]
})
export class TechnicalModule
{
}

