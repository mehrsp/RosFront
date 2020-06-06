import { BaseDto } from "../generic/base.dto";

export class LoginDto extends BaseDto {
	constructor(
		public userName?: string,
        public password?: string,
        public grand_type?: string
	) {
		super();
	}
}
