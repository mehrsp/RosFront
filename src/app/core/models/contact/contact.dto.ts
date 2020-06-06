import { BaseDto } from "../generic/base.dto";
import { AgencyDto } from "./agency.dto";
import { ClientContactDto } from "./client-contact.dto";
import { AddressDto } from "./address.dto";

export class ContactDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string,
    public Surname?: string,
    public MiddleName?: string,
    public TelephoneNo?: number,
    public TelephoneExtension?: number,
    public MobileNo?: number,
    public Address?: AddressDto,
    public AddressId?: number,
    public Email?: string,
    public Title?: string,
    public FaxNo?: number,
    public Comment?: string,
    public ClientContact?: ClientContactDto,
    public ClientContactId?: number,
    public Agencies?: AgencyDto[],
    public NameFamily?: string,
    public Contact?: ContactDto
  ) {
    super();
    this.Agencies = new Array<AgencyDto>();
    this.Address = new AddressDto();
  }
}
