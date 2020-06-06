import { BaseDto } from "../../generic/base.dto";
import { AccidentDto } from "./accident.dto";
import { UserDto } from "../../authentication/user.dto";
import { ClientDto } from "../../client/client.dto";

export class AccidentInvolveDto extends BaseDto {
  constructor(
    public Id?: number,
    public Staff?: UserDto,
    public StaffId?: number,
    public Accident?: AccidentDto,
    public AccidentId?: number,
    public Client?: ClientDto,
    public ClientId?: number,
    public ShowType?: string,
    public ExternalProfessional?: UserDto,
    public ExternalProfessionalId?: number
  ) {
    super();
  }
}
