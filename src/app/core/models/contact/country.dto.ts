import { BaseDto } from "../generic/base.dto";

export class CountryDto extends BaseDto {
	constructor(
		public Id?: number,
		public Title?: string,
		public Summary?: string
	) {
		super();
	}
}
