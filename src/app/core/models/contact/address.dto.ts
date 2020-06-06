import { BaseDto } from './../generic/base.dto';
import { CountryDto } from './country.dto';
import { TownDto } from './town.dto';

export class AddressDto extends BaseDto {
	constructor(
		public Id?: number,
		public AddressLine1?: string,
		public AddressLine2?: string,
		public Town?: TownDto,
		public TownId?: number,
		public Country?: CountryDto,
		public CountyId?: number,
		public PostalCode?: string,
	) {
		super();
		this.Town = new TownDto();
		this.Country = new CountryDto();
	}
}
