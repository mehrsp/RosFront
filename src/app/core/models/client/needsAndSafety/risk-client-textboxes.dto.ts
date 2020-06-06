import { BaseDto } from "../../generic/base.dto";
import { RiskClientTextBoxDto } from "./risk-client-textbox.dto";

export class RiskClientTextBoxesDto extends BaseDto {
	constructor(
		public RiskClientTextBoxs?: RiskClientTextBoxDto[]
	) {
		super();
		this.RiskClientTextBoxs = [];
	}
}
