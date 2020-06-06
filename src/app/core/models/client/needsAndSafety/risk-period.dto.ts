import { BaseDto } from "../../generic/base.dto";
import { ClientDto } from "../client.dto";
import { UserDto } from "../../authentication/user.dto";

export class RiskPeriodDto extends BaseDto {
  constructor(
    public Id?: string,
    // public FrequencyType: FrequencyTypeDto,
    public FrequencyTypeId?: number,
    public StarDate?: Date,
    public IsTerminated?: boolean,
    public Client?: ClientDto,
    public ClientId?: number,
    public ModifieDate?: Date,
    public CreatedDate?: Date,
    public CreatedBy?: UserDto,
    public CreatedById?: number,
    public ModifiedDate?: Date,
    public ModifiedBy?: UserDto,
    public ModifiedById?: number,
  ) {
    super();
  }
}
