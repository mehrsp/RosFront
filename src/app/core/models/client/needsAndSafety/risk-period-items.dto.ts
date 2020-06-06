import { BaseDto } from "../../generic/base.dto";
import { RiskPeriodItemDto } from "./risk-period-item.dto";

export class RiskPeriodItemsDto extends BaseDto {
	constructor(
		public RiskPeriodItems?: RiskPeriodItemDto[]
	) {
		super();
		this.RiskPeriodItems = [];
	}
}
