import { BaseDto } from "../../generic/base.dto";

export class LanguageDto extends BaseDto {
	constructor(
		public Id?: number,
		public Name?: string,
		public Description?: string
	) {
		super();
	}
}
