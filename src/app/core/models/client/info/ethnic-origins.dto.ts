import { BaseDto } from "../../generic/base.dto";
import { EthnicOriginDto } from "./ethnic-origin.dto";

export class EthnicOriginsDto extends BaseDto {
	constructor(
		public EthnicOrigins?: EthnicOriginDto[]
	) {
		super();
		this.EthnicOrigins = [];
	}
}
