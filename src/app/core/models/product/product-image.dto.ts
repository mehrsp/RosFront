import { BaseDto } from "../generic/base.dto";
import { ProductDto } from "./product.dto";
import { DocumentDto } from "../document/document.dto";

export class ProductImageDto extends BaseDto {

	constructor(
		public Id?: number,
		public title?: string,
		public Product?: ProductDto,
		public ProductId?: number,
		public CreatedById?: number,
		public Photo?: string
	) {
		super();
	}
}