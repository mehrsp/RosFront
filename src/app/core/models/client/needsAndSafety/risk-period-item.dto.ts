import { BaseDto } from "../../generic/base.dto";
import { RiskPeriodDto } from "./risk-period.dto";

export class RiskPeriodItemDto extends BaseDto {
  constructor(
    public Id?: string,
    public RiskPeriod?: RiskPeriodDto,
    public RiskPeriodId?: string,
    public IsTerminated?: boolean,
    public StartedDate?: Date,
    public TerminatedDate?: Date
  ) {
    super();
    this.RiskPeriod = new RiskPeriodDto();
  }
}
