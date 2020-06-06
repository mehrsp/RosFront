import { BaseDto } from "../generic/base.dto";
import { ProductDto } from './product.dto';

export class OfferDto extends BaseDto {

	constructor(
        public Id: number,
        public Title: string,
        public Percentage: number,
        public Description: string,
        public StartDate: Date,
        public EndDate: Date,
        public Price: number,
        public Product: ProductDto
	) {
		super();
	}
}