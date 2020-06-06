import { BaseDto } from "../generic/base.dto";

export class SlideShowDto extends BaseDto {
	constructor(
		public Id?: number,
		public Title?: string,
		public Description?: string,
		public Photo?: string,
		public Link?: string,
		public Priority?: number
	) {
		super();
		this.Link = "https://rosentis.ir";
	}

}