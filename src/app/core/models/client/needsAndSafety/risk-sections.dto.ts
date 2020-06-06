import { BaseDto } from "../../generic/base.dto";
import { RiskSectionDto } from "./risk-section.dto";

export class RiskSectionsDto extends BaseDto {
	constructor(
		public RiskSections?: RiskSectionDto[]
	) {
		super();
		this.RiskSections = [];
	}
}
