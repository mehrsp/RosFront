import { BaseDto } from "../../generic/base.dto";
import { LanguageDto } from "./language.dto";

export class LanguagesDto extends BaseDto {
	constructor(
		public Languages?: LanguageDto[]
	) {
		super();
		this.Languages = [];
	}
}
