import { BaseDto } from "../../generic/base.dto";
import { RiskAssesmentClientByLevelDto } from "./risk-assesment-client-by-level.dto";

export class RiskClientTextBoxDto extends BaseDto {
  constructor(
    public Id?: string,
    public Value?: string,
    public RiskAssesmentClientByLevel?: RiskAssesmentClientByLevelDto
  ) {
    super();
    this.RiskAssesmentClientByLevel = new RiskAssesmentClientByLevelDto();
  }
}
