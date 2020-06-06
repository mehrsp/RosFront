import { BaseDto } from "../../generic/base.dto";

export class RegionDto extends BaseDto {
	constructor(
		public Id?: number,
		public Name?: string
	) {
		super();
	}

}
