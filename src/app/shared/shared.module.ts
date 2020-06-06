import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { IconifyByContentTypePipe } from './pipes/iconify-by-content-type.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
    declarations: [
        FormatDatePipe,
        IconifyByContentTypePipe
    ],
    imports: [
        CommonModule,
    ],
    exports:[
        FormatDatePipe,
        IconifyByContentTypePipe,
        CommonModule,
        FormsModule
    ],
    providers: []
})
export class SharedModule {

}
