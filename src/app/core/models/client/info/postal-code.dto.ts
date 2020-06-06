import { BaseDto } from "../../generic/base.dto";

export class PostalCodeDto extends BaseDto {
	constructor(
		public Id?: number,
		public Postcode?: string
	) {
		super();
	}
}
