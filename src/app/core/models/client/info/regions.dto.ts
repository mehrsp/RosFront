import { BaseDto } from "../../generic/base.dto";
import { RegionDto } from "./region.dto";

export class RegionsDto extends BaseDto {
	constructor(
		public Regions?: RegionDto[]
	) {
		super();
		this.Regions = [];
	}
}
