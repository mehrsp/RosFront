import { DropdownModule } from 'primeng/dropdown';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';
import {TableModule} from 'primeng/table';
import { SidebarModule, ConfirmationService, KeyFilterModule, StepsModule, FileUploadModule } from 'primeng/primeng';
import {EditorModule} from 'primeng/editor';

import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ExpandCollapseService } from 'src/app/core/helpers/expand-collaps-tree-service';
import { BrandListComponent } from './pages/brand-list/brand-list.component';
import { BrandEditComponent } from './pages/brand-edit/brand-edit.component';
import { BrandListTableComponent } from './components/brand-table/brand-list-table.component';
import { BrandService } from './services/barand.service';
import { BrandEditFormComponent } from './components/brand-form/brand-edit-form.component';
import { BrandRoutingModule } from './brand.routing.module';
import { CountryService } from '../info/services/country.service';

@NgModule({
    declarations: [
        BrandListComponent,
        BrandEditFormComponent,
        BrandEditComponent,
        BrandListTableComponent
    ],
    imports     : [
        BrandRoutingModule,
        FormsModule,
        ToastModule,
        CommonModule,
        ContextMenuModule,
        ButtonModule,
        SidebarModule,
        KeyFilterModule,
        ConfirmDialogModule,
        TableModule,
        EditorModule,
        StepsModule,
        FileUploadModule,
        DropdownModule
    ],
    providers: [BrandService, ConfirmationService,AppMessageService,ExpandCollapseService, CountryService]
})
export class BrandModule
{
}

