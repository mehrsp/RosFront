import { BaseDto } from "../generic/base.dto";
import { AddressDto } from "./address.dto";

export class AgencyDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string,
    public AddressId?: number,
    public Address?: AddressDto,
    public TelephoneNo?: number,
    public FaxNo?: number
  ) {
    super();
  }
}
