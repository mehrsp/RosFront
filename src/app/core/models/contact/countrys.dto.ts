import { BaseDto } from '../generic/base.dto';
import { CountryDto } from './country.dto';

export class CountrysDto extends BaseDto {
	constructor(
		public Countries?: CountryDto[]
	) {
		super();
		this.Countries = [];
	}
}
