import { BaseDto } from "../../generic/base.dto";
import { IncidentDto } from "./Incident.dto";
import { UserDto } from "../../authentication/user.dto";
import { ClientDto } from "../../client/client.dto";

export class IncidentInvolveDto extends BaseDto {
  constructor(
    public Id?: number,
    public Staff?: UserDto,
    public StaffId?: number,
    public Incident?: IncidentDto,
    public IncidentId?: Number,
    public Client?: ClientDto,
    public ClientId?: number,
    public ShowType?: string,
    public ExternalProfessional?: UserDto,
    public ExternalProfessionalId?: number
  ) {
    super();
  }
}
