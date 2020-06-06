import { BaseDto } from "../../generic/base.dto";
import { ProjectDto } from "../../project/project.dto";
import { DocumentDto } from "../../document/document.dto";
import { SafeguardingAbuseDto } from "./safeguarding-abuse.dto";
import { UserDto } from "../../authentication/user.dto";
import { ClientDto } from "../../client/client.dto";
import { List } from "lodash";

export class SafeguardingDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string,
    public Project?: ProjectDto,
    public ProjectId?: number,
    public Date?: Date,
    public RaisedBy?: number,
    public Detail?: string,
    public Document?: DocumentDto,
    public DocumentId?: number,
    public SafeguardingAbuse?: List<SafeguardingAbuseDto>,
    public FollowUp?: boolean,
    public FollowUpDate?: Date,
    public Staff?: UserDto,
    public StaffId?: number,
    public ActionAndStep?: string,
    public OutcomeAndReflection?: string,
    public Concern?: ClientDto,
    public ConcernId?: number
  ) {
    super();
  }
}
