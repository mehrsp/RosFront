import { BaseDto } from "../../generic/base.dto";
import { ProjectDto } from "../../project/project.dto";
import { AccidentInvolveDto } from "./accident-involve.dto";
import { AccidentAgencyDto } from "./accident-agency.dto";
import { UserDto } from "../../authentication/user.dto";
import { List } from "lodash";

export class AccidentDto extends BaseDto {
  constructor(
    public Id?: number,
    public name?: string,
    public Project?: ProjectDto,
    public ProjectId?: number,
    public Date?: Date,
    public TypeOfAccident?: number,
    public RiddorInformed?: boolean,
    public AccidentDescription?: string,
    public FollowUp?: boolean,
    public FollowUpDate?: Date,
    public ActionAndStep?: string,
    public OutcomeAndReflection?: string,
    public StaffLead?: UserDto,
    public AccidentInvolves?: List<AccidentInvolveDto>,
    public AccidentAgencyes?: List<AccidentAgencyDto>,
    public StaffLeadId?: number
  ) {
    super();
  }
}
