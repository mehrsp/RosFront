import { BaseDto } from './../../generic/base.dto';

import { ProvinceDto } from "./province.dto";

export class CityDto extends BaseDto {

	constructor(
		public Id?: number,
		public Name?: string,
		public ProvinceId?: number
		){		
		super();	
	}	
}