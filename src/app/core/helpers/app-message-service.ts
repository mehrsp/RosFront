import { Injectable } from "@angular/core";

import {MessageService} from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class AppMessageService {

    //#region Properties    

    //#endregion Properties

    //#region Ctors
    /**
     * Constructor
     *
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private messageService: MessageService
    )
    {
    }

    //#endregion Ctors

    //#region Functions
    showSuccess() {

        this.messageService.add({
            key: 'toastMessage',
            severity:'success', 
            summary:'با موفقیت انجام شد', 
            detail:'عملیات با موفقیت انجام شد'
        });
    }

    showException(body: string) {
        this.messageService.add({
            key: 'toastMessage',
            severity: 'error', 
            summary: "عملیات ناموفق",
            detail: body
        });
    }

    clearMessages() {
        this.messageService.clear();
    }

    //#endregion Functions
    
}
