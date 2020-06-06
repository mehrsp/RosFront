import { BaseDto } from "../../generic/base.dto";
import { PostalCodeDto } from "./postal-code.dto";

export class PostalCodesDto extends BaseDto {
	constructor(
		public PostalCodes?: PostalCodeDto[]
	) {
		super();
		this.PostalCodes = [];
	}
}
