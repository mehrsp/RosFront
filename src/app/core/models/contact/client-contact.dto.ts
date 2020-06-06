import { BaseDto } from "../generic/base.dto";
import { ClientDto } from "../client/client.dto";
import { RelationshipDto } from "../client/relatiohship.dto";
import { ContactDto } from "./contact.dto";

export class ClientContactDto extends BaseDto {
    constructor(
        public Id?: number,
        public Client?: ClientDto,
        public ClientId?: number,
        public RelationShip?: RelationshipDto,
        public RelationShipId?: number,
        public Description?: string,
        public Contact?: ContactDto,
        public ContactId?: number
    ) {
        super();
        this.Contact = new ContactDto();
        this.Client = new ClientDto();
        this.RelationShip = new RelationshipDto();
    }
}
