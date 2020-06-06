import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ExpandCollapseService {

    //#region Properties    

    //#endregion Properties

    //#region Ctors
    constructor(
    )
    {
    }

    //#endregion Ctors

    //#region Functions
    expandAll(treeNode){
        treeNode.forEach( node => {
            this.expandRecursive(node, true);
        } );
    }

    collapseAll(treeNode){
        treeNode.forEach( node => {
            this.expandRecursive(node, false);
        } );
    }

    private expandRecursive(node, isExpand:boolean){
        node.expanded = isExpand;
        if(node.children){
            node.children.forEach( childNode => {
                this.expandRecursive(childNode, isExpand);
            } );
        }
    }
    //#endregion Functions
    
}
