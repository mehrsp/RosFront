import { BaseDto } from "../generic/base.dto";
import { List } from "lodash";
import { ProductDto } from "./product.dto";

export class CommentDto extends BaseDto {

	constructor(
		public Id?: number,
		public Description?: string,
		public Parent?: CommentDto,
		public ParentId?: number,
		public Product?: ProductDto,
		public ProductId?: number,
		public MemberId?: number,
		public Children?: List<CommentDto>
	) {
		super();
		this.Children = new Array<CommentDto>();
	}
}