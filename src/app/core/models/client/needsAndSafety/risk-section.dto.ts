import { BaseDto } from "../../generic/base.dto";

export class RiskSectionDto extends BaseDto {
	constructor(
		public Id?: number,
		public Name?: string
	) {
		super();
	}
}
