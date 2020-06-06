import { BaseDto } from "../generic/base.dto";
import { List } from "lodash";
import { ProductCategoryDto } from "./product-category.dto";

export class ProductCategoryDataDto extends BaseDto {

	constructor(
		public label?: string,
		public data?: string,
		public model?: ProductCategoryDto,
		public children?: Array<ProductCategoryDataDto>
	) {
		super();
		this.children = new Array<ProductCategoryDataDto>();

	}
}