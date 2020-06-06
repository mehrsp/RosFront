import { BaseDto } from "../../generic/base.dto";
import { ReligionDto } from "./religion.dto";

export class ReligionsDto extends BaseDto {
	constructor(
		public Religions?: ReligionDto[]
	) {
		super();
		this.Religions = [];
	}
}
