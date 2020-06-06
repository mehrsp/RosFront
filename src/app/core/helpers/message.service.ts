import { Injectable } from "@angular/core";

import { Message } from "primeng/primeng";

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    //#region Properties
    public msgs: Message[] = [];

    //#endregion Properties

    //#region Ctors

    //#endregion Ctors

    //#region Functions
    showSuccess() {
        this.msgs.push({
            severity: 'success', 
            summary: 'Action is successed',
            detail: 'Action date must be Success'
        });

        setTimeout(() => {
            this.clearMessages();
        }, 4000);
    }

    showException(body: string) {
        this.msgs.push({
            severity: 'error', 
            summary: "Action is Faild",
            detail: body
        });
        
        setTimeout(() => {
            this.clearMessages();
        }, 4000);
    }

    clearMessages() {
        this.msgs = [];
    }
    //#endregion Functions
}
