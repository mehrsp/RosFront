import { BaseDto } from "../generic/base.dto";

export class TownDto extends BaseDto {
	constructor(
		public Id?: number,
		public Name?: string
	) {
		super();
	}
}
