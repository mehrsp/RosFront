import { BaseDto } from "../../generic/base.dto";
import { RiskAssesmentClientByLevelDto } from "./risk-assesment-client-by-level.dto";

export class RiskClientDatePickerDto extends BaseDto {
  constructor(
    public Id?: string,
    public Value?: any,
    public RiskAssesmentClientByLevel?: RiskAssesmentClientByLevelDto
  ) {
    super();
    this.RiskAssesmentClientByLevel = new RiskAssesmentClientByLevelDto();
  }
}
