import { List } from 'lodash';

import { BaseDto } from './../../generic/base.dto';
import { CountryDto } from "./country.dto";
import { CityDto } from "./city.dto";

export class ProvinceDto extends BaseDto {
	constructor(
		public Id?: number,
		public Name?: string,
		public Cities?: List<CityDto>
	){
		super();
		this.Cities = new Array<CityDto>();
	}		
}