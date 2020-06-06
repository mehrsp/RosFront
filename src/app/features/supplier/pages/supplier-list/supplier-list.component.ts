import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { SupplierDto } from 'src/app/core/models/members/supplier.dto';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html'
})
export class SupplierListComponent implements OnInit {

  //#region Properties
  suppliers: SupplierDto[];
  loading: boolean;
  //#endregion Properties

  //#region Properties
  constructor(
    private router: Router,
    private SupplierApi: SupplierService,   
    private appMessageService: AppMessageService
  ) {
    this.suppliers = new Array<SupplierDto>();
  }
  //#endregion Properties

  //#region Lifecycle Hooks
  ngOnInit() {
    this.getSuppliers();
  }
  //#endregion Lifecycle Hooks

  //#region Utilities
  private getSuppliers() {
    this.loading = true;
        setTimeout(() => {
          this.SupplierApi.Get(null).subscribe(
            res => {
              this.suppliers = res.Suppliers as SupplierDto[];
              this.loading = false;
        });
      }, 1000);   
  }
  
  //#endregion Utilities

  //#region Functions
  onInsert(): void {
    this.router.navigate(['suppliers/create']);
  }
  onUpdate(id: number) {
    this.router.navigate(['suppliers/edit', id]);
  }

  onDelete(model: SupplierDto) {
    this.SupplierApi.Remove(model).subscribe(
      res => {
        if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
            (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.appMessageService.showSuccess();
        this.getSuppliers();
      },
      error2 => {
      }
    );
  }
  //#endregion Functions

}
