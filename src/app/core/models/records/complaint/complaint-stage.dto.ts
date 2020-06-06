import { BaseDto } from "../../generic/base.dto";
import { ComplaintDto } from "./complaint.dto";
import { UserDto } from "../../authentication/user.dto";
import { DocumentDto } from "../../document/document.dto";

export class ComplaintStageDto extends BaseDto {
  constructor(
    public Id?: number,
    public StageNo?: number,
    public FollowUpDate?: Date,
    public staff?: UserDto,
    public staffId?: number,
    public WrittenAck?: boolean,
    public WrittenAckDate?: Date,
    public AddditionalSupport?: DocumentDto,
    public AddditionalSupportId?: number,
    public ActionDetail?: string,
    public Resolved?: boolean,
    public ResolvedDate?: Date,
    public Complaint?: ComplaintDto,
    public ComplaintId?: number
  ) {
    super();
  }
}
