import { BaseDto } from "../generic/base.dto";
import { DocumentDto } from "../document/document.dto";
import { ProductDto } from "./product.dto";

export class ProductCatalogDto extends BaseDto {

	constructor(
		public Id?: number,
		public Title?: string,
		public Product?: ProductDto,
		public ProductId?: number,
		public Document?: DocumentDto,
		public DocumentId?: number
	) {
		super();
	}
}
