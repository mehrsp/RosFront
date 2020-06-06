import { BaseDto } from "../../generic/base.dto";
import { RiskPeriodDto } from "./risk-period.dto";

export class RiskPeriodsDto extends BaseDto {
	constructor(
		public RiskPeriods?: RiskPeriodDto[]
	) {
		super();
		this.RiskPeriods = [];
	}
}
