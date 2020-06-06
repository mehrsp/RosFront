import { BaseDto } from "../../generic/base.dto";
import { RiskSectionDto } from "./risk-section.dto";

export class RiskLevelDto extends BaseDto {
  constructor(
    public Id?: number,
    public Section?: RiskSectionDto,
    public SectionId?: number,
    public Name?: string,
    public Desc?: string
  ) {
    super();
    this.Section = new RiskSectionDto();
  }
}
