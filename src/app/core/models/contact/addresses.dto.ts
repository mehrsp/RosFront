import { BaseDto } from './../generic/base.dto';
import { AddressDto } from './address.dto';

export class AddressesDto extends BaseDto {
	constructor(
		public Addresss?: AddressDto[]
	) {
		super();
		this.Addresss = [];
	}
}
