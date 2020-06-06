import { BaseDto } from './../../generic/base.dto';
import { AddressDto } from '../../contact/address.dto';

export class AddressDtos extends BaseDto {
	constructor() {
		super();
		this.Addresss = [];
	}
	public Addresss: AddressDto[];
}
