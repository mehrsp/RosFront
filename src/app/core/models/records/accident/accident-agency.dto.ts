import { BaseDto } from "../../generic/base.dto";
import { AgencyDto } from "../../contact/agency.dto";
import { AccidentDto } from "./accident.dto";
import { UserDto } from "../../authentication/user.dto";

export class AccidentAgencyDto extends BaseDto {
  constructor(
    public Id?: number,
    public Agency?: AgencyDto,
    public AgencyId?: number,
    public Accident?: AccidentDto,
    public AccidentId?: number,
    public CreatedDate?: Date,
    public CreatedBy?: UserDto,
    public CreatedById?: number,
    public ModifiedDate?: Date,
    public ModifiedBy?: UserDto,
    public ModifiedById?: number
  ) {
    super();
  }
}
