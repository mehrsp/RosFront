import { BaseDto } from "../../generic/base.dto";
import { ProjectDto } from "../../project/project.dto";
import { DocumentDto } from "../../document/document.dto";
import { ComplaintTypeDto } from "./complaint-type.dto";
import { ComplaintInvolveDto } from "./complaint-involve.dto";
import { ComplaintStageDto } from "./complaint-stage.dto";
import { List } from "lodash";

export class ComplaintDto extends BaseDto {
  constructor(
    public Id?: number,
    public Project?: ProjectDto,
    public ProjectId?: number,
    public Date?: Date,
    public Method?: number,
    public AddditionalSupport?: DocumentDto,
    public AddditionalSupportId?: number,
    public ComplaintType?: ComplaintTypeDto,
    public ComplaintTypeId?: number,
    public ComplaintDescription?: string,
    public OutcomeAndReflection?: string,
    public ComplaintInvolves?: List<ComplaintInvolveDto>,
    public ComplaintStages?: List<ComplaintStageDto>
  ) {
    super();
  }
}
