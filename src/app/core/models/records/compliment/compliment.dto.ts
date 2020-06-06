import { BaseDto } from "../../generic/base.dto";
import { ProjectDto } from "../../project/project.dto";
import { DocumentDto } from "../../document/document.dto";
import { ComplimentInvolveDto } from "./compliment-involve.dto";
import { List } from "lodash";

export class ComplimentDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string,
    public Project?: ProjectDto,
    public ProjectId?: number,
    public Date?: Date,
    public Method?: number,
    public TypeOfCompliment?: number,
    public Document?: DocumentDto,
    public DocumentId?: number,
    public Detail?: string,
    public OutcomeAndReflection?: string,
    public ComplimentInvolves?: List<ComplimentInvolveDto>
  ) {
    super();
  }
}
