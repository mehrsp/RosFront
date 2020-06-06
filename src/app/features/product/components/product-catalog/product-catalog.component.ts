import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { BaseComponent } from "src/app/core/base/base.component";
import { AppMessageService } from "src/app/core/helpers/app-message-service";
import { ConfirmationService, MenuItem } from "primeng/api";
import { ProductCatalogDto } from "src/app/core/models/product/product-catalog.dto";

@Component({
    selector: 'app-product-catalog',
    templateUrl: './product-catalog.component.html'
  })
  export class ProductCatalogComponent extends BaseComponent implements OnInit {
      
  //#region Properties
  fileForUpload: File[] = [];
  items: MenuItem[];
  selectedProductCatalog: ProductCatalogDto;
  uploadedFiles: File[] = [];

  @Output()
  onUploadCatalog: EventEmitter<any> = new EventEmitter();

  @Input()
  catalogs: ProductCatalogDto[];

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  @Output()
  onDownload: EventEmitter<any> = new EventEmitter();
  //#endregion Properties

  //#region Ctors
  constructor(private appMessageService: AppMessageService,
              private confirmationService: ConfirmationService) {
        super();  
        this.selectedProductCatalog = new ProductCatalogDto();
  }
  //#endregion Ctors

  //#region Lifecycle Hooks
  ngOnInit() {
    this.initItems();
  }
  //#endregion Lifecycle Hooks

  //#region Functions
  onUpload(e, file) {
    this.onUploadCatalog.next(e.files[0]);
    file.clear();
  }

  initItems() {
      this.items = [
        {label: 'دانلود', icon: 'pi pi-refresh', command:  () => {
            this.download(this.selectedProductCatalog);
        }},
        {label: 'حذف', icon: 'pi pi-times', command: e => {
            this.removeCatalog(this.selectedProductCatalog);
        }},
    ];
  }

  removeCatalog(e) {
    this.confirmationService.confirm({
      message: 'آیا مطمئن هستید؟' + '\xa0' + e.Title + '\xa0' + 'حذف خواهد شد',
      accept: () => {
        this.onDelete.next(e);        
      },
    });
  }

  onDropDowmClick(model: ProductCatalogDto) {
      this.selectedProductCatalog = model;
  }
  download(e) {
    this.onDownload.next(e);
  }
  //#endregion Functions
  }
  