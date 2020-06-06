import { BrandDto } from './../brands/brand.dto';
import { BaseDto } from "../generic/base.dto";
import { TechnicalDto } from "./technical.dto";

export class ProductCategoryTechnicalDto extends BaseDto {
	constructor(
		public Id?: number,
		public ProductCategoryId?: number,
		public TechnicalId?: number,
		public Technical?: TechnicalDto,
		public BrandId?: number,
		public Brand?: BrandDto,
	) {
		super();
	}
}