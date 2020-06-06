import { BaseDto } from "../../generic/base.dto";
import { ProjectDto } from "../../project/project.dto";
import { NatureDto } from "./nature.dto";
import { IncidentInvolveDto } from "./Incident-involve.dto";
import { IncidentAgencyDto } from "./incident-agency.dto";
import { UserDto } from "../../authentication/user.dto";
import { List } from "lodash";

export class IncidentDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string,
    public Project?: ProjectDto,
    public ProjectId?: number,
    public Date?: Date,
    public TypeOfIncident?: number,
    public Nature?: NatureDto,
    public NatureId?: number,
    public CrimeRefrenceNo?: string,
    public RiddorInformed?: boolean,
    public IncidentDescription?: string,
    public IncidentInvolves?: List<IncidentInvolveDto>,
    public IncidentAgencyes?: List<IncidentAgencyDto>,
    public FollowUp?: boolean,
    public FollowUpDate?: Date,
    public ActionAndStep?: string,
    public OutcomeAndReflection?: string,
    public StaffLead?: UserDto,
    public StaffLeadId?: number
  ) {
    super();
  }
}
