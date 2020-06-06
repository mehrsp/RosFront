import { BaseDto } from "../generic/base.dto";

export class ServiceLevelDto extends BaseDto {
	constructor(
		public Id?: number,
		public Name?: string,
		public Description?: string
	) {
		super();
	}
}
