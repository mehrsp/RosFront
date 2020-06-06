import { DialogModule } from 'primeng/dialog';
import { SlideShowEditFormComponent } from './components/slides-form/slides-edit-form.component';
import { SlideShowListTableComponent } from './components/slides-table/slides-list-table.component';
import { SlideShowService } from './services/slides.service';
import { GalleriaModule } from 'primeng/galleria';
import { SlideShowRoutingModule } from './slides.routing.module';
import { SlideShowListComponent } from './../slides/pages/slides-list/slides-list.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule, FileUploadModule, ConfirmationService } from 'primeng/primeng';
import { AppMessageService } from 'src/app/core/helpers/app-message-service';

@NgModule({
    declarations: [
        SlideShowListComponent,
        SlideShowListTableComponent,
        SlideShowEditFormComponent
    ],
    imports     : [
        SlideShowRoutingModule,
        FormsModule,
        ToastModule,
        CommonModule,
        ButtonModule,
        ConfirmDialogModule,
        FileUploadModule,
        GalleriaModule,
        DialogModule
    ],
    providers: [SlideShowService, ConfirmationService, AppMessageService]
})
export class SlideShowModule
{
}

