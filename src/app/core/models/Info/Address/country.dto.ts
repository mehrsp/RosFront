import { List } from 'lodash';

import { BaseDto } from './../../generic/base.dto';
import { ProvinceDto } from "./province.dto";

export class CountryDto extends BaseDto{
	constructor(
		public Id?: number,
		public Name?: string,
		public Provinces?: List<ProvinceDto>
	){
		super();
	}
	
}