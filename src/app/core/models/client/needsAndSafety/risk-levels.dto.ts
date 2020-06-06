import { BaseDto } from "../../generic/base.dto";
import { RiskLevelDto } from "./risk-level.dto";

export class RiskLevelsDto extends BaseDto {
	constructor(
		public RiskLevels?: RiskLevelDto[]
	) {
		super();
		this.RiskLevels = [];
	}
}
