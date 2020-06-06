import { BaseDto } from "../../generic/base.dto";
import { RiskAssesmentClientByLevelDto } from "./risk-assesment-client-by-level.dto";

export class RiskAssesmentCLientByLevelsDto extends BaseDto {
  constructor(
    public RiskAssesmentClientByLevels?: RiskAssesmentClientByLevelDto[]
  ) {
    super();
    this.RiskAssesmentClientByLevels = [];
  }
}
