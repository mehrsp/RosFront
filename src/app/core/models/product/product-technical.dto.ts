import { BaseDto } from "../generic/base.dto";
import { TechnicalDto } from "./technical.dto";

export class ProductTechnicalDto extends BaseDto{

	constructor(
		public Id?: number,
		public ProductId?: number,
		public Name?: string,
		public Description?: string,
		public IsChecked?: boolean,
		public IsValid?: boolean,
		public TechnicalId?: number,
		public Technical?: TechnicalDto,
	) {
		super();
	}

}