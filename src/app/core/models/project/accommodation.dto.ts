import { BaseDto } from "../generic/base.dto";

export class AccommodationDto extends BaseDto {
	constructor(
		public Id?: number,
		public Name?: string,
		public Description?: string
	) {
		super();
	}
}
