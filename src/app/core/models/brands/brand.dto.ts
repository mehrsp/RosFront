import { CountryDto } from './../contact/country.dto';

import { BaseDto } from "../generic/base.dto";

export class BrandDto extends BaseDto {

	constructor(
		public Id?: number,
		public Name?: string,
		public Description?: string,
		public Logo?: string,
		public Priority?: number, 
		public UploadedFiles?: any[],
		public Country?: CountryDto,
		public CountryId?: number
	) {
		super();
		this.Id = 0;
	}
}
