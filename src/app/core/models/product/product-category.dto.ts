import { BaseDto } from "../generic/base.dto";
import { List } from "lodash";
import { ProductDto } from "./product.dto";

export class ProductCategoryDto extends BaseDto {

	constructor(
		public Id?: number,
		public ParentId?: number,
		public Parent?: ProductCategoryDto,
		public Name?: string,
		public Priority?: number,
		public Products?: List<ProductDto>,
		public Children?: List<ProductCategoryDto>,
		public Expandable?: boolean
	) {
		super();
		this.Products = new Array<ProductDto>();
		this.Children = new Array<ProductCategoryDto>();
		if(this.Children){
             this.Expandable = true;
		}else{
			this.Expandable = false;
		}
	}
}
