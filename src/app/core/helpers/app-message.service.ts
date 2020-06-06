import { Injectable } from "@angular/core";

//import { Message } from "primeng/primeng";
import {MessageService} from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class AppMessageService {

    //#region Properties
    //public msgs: Message[] = [];
    //#endregion Properties

    //#region Ctors
    constructor(private messageService: MessageService) {}
    //#endregion Ctors

    //#region Functions

    showSuccess() {

        this.messageService.add({
            key: 'toastMessage',
            severity:'success', 
            summary:'Done Successfuly', 
            detail:'Action completed successfuly'
        });
    }

    showException(body: string) {
        this.messageService.add({
            key: 'toastMessage',
            severity: 'error', 
            summary: "Action is Faild",
            detail: body
        });
    }

    clearMessages() {
        this.messageService.clear();
    }
    //#endregion Functions
}
