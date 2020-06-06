import { BaseDto } from "../generic/base.dto";

export class TechnicalDto extends BaseDto {
	constructor(
		public Id?: number,
		public Title?: string,
		public ParentId?: number,
		public Parent?: TechnicalDto,
		public Children?: TechnicalDto[]
	) {
		super();
		this.Children = new Array<TechnicalDto>();
	}

}