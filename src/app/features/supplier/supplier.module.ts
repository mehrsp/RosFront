import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { SupplierRoutingModule } from './supplier.routing';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ConfirmationService, KeyFilterModule, StepsModule, Password, FieldsetModule, InputTextareaModule, DropdownModule, GMapModule, ProgressSpinnerModule } from 'primeng/primeng';

import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { SupplierListComponent } from './pages/supplier-list/supplier-list.component';
import { SupplierEditComponent } from './pages/supplier-edit/supplier-edit.component';
import { SupplierListTableComponent } from './components/supplier-table/supplier-list-table.component';
import { SupplierEditFormComponent } from './components/supplier-form/supplier-edit-form.component';
import { SupplierService } from './services/supplier.service';
import { UserService } from '../account/services/user.service';
import { ProvinceService } from '../info/services/provine.service';
import { CityService } from '../info/services/city.service';


@NgModule({
    declarations: [
        SupplierEditFormComponent,
        SupplierEditComponent,
        SupplierListTableComponent,
        SupplierListComponent
    ],
    imports     : [
        SupplierRoutingModule,
        FormsModule,
        ToastModule,
        CommonModule,
        ContextMenuModule,
        ButtonModule,
        KeyFilterModule,
        ConfirmDialogModule,
        TableModule,
        StepsModule,
        PasswordModule,
        FieldsetModule,
        InputTextareaModule,
        DropdownModule,
        ProgressSpinnerModule
    ],
    providers: [SupplierService, UserService, 
                ConfirmationService,AppMessageService, ProvinceService,CityService]
})
export class SupplierModule
{
}

