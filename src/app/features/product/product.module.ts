import { ProductTechnicalComponent } from './components/product-technical/product-technical.component';
import { ProductTechnicalService } from './services/product-technical.service';
import { ProductRelatedService } from './services/product-related.service';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ProductImageService } from './services/product-image.service';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductAttachmentComponent } from './pages/product-attachment/product-attachment.component';
import { TableModule } from 'primeng/table';
import { ProductDetailListTableComponent } from './components/product-detail-list/product-detail-list-table.component';
import { ProductDetailListComponent } from './pages/product-detail-list/product-detail-list.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { SpinnerModule } from 'primeng/spinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ContextMenuModule } from 'primeng/contextmenu';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';

import { ProductService } from './services/product.service';
import { ProductEditFormComponent } from './components/product-form/product-edit-form.component';
import { SidebarModule, ConfirmationService, KeyFilterModule, InputSwitchModule, ProgressSpinnerModule,
     AccordionModule, EditorModule, 
     FileUploadModule, TabViewModule, SplitButtonModule, CheckboxModule } from 'primeng/primeng';
import {DataViewModule} from 'primeng/dataview';


import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ExpandCollapseService } from 'src/app/core/helpers/expand-collaps-tree-service';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductRoutingModule } from './product.routing.module';
import { ProductListTableComponent } from './components/product-list/product-list-table.component';
import { LoaderService } from 'src/app/core/helpers/loader/loader.service';
import { ProductDetailEditFormComponent } from './components/product-detail-form/product-detail-form.component';
import { ProductRelatedComponent } from './components/product-related/product-related.component';


@NgModule({
    declarations: [
        ProductListComponent,
        ProductEditFormComponent,
        ProductEditComponent,
        ProductListTableComponent,
        ProductDetailListComponent,
        ProductDetailEditFormComponent,
        ProductDetailListTableComponent,
        ProductAttachmentComponent,
        ProductImageComponent,
        ProductCatalogComponent,
        ProductRelatedComponent,
        ProductTechnicalComponent
    ],
    imports     : [
        ProductRoutingModule,
        FormsModule,
        ToastModule,
        CommonModule,
        ContextMenuModule,
        ButtonModule,
        SidebarModule,
        KeyFilterModule,
        ConfirmDialogModule,
        InputSwitchModule,
        SpinnerModule,
        DropdownModule,
        ProgressSpinnerModule,
        AccordionModule,
        EditorModule,
        TableModule,
        FileUploadModule,
        DialogModule,
        TabViewModule,
        GalleriaModule,
        DataViewModule,
        SplitButtonModule,
        CardModule,
        CheckboxModule
    ],
    entryComponents: [ProductEditFormComponent],
    providers: [ProductService, ConfirmationService,
        LoaderService,
        AppMessageService,
        ProductRelatedService,
        ProductTechnicalService,
        ProductImageService,ExpandCollapseService]
})
export class ProductModule
{
}

