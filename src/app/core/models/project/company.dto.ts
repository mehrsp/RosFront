import { BaseDto } from "../generic/base.dto";
import { AddressDto } from "../contact/address.dto";

export class CompanyDto extends BaseDto {
	constructor(
		public Id?: number,
		public Name?: string,
		public CompanyNo?: number,
		public VatNo?: number,
		public Address?: AddressDto,
		public AddressId?: number,
	) {
		super();
	}
}
