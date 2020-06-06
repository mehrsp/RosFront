import { BaseDto } from "../generic/base.dto";
import { ProductDto } from "./product.dto";
import { DocumentDto } from "../document/document.dto";

export class ProductRelatedDto extends BaseDto {

	constructor(
		public Id?: number,
		public Description?: number,
		public Product?: ProductDto,
		public ProductId?: number,
		public Link?: string
	) {
		super();
	}
}