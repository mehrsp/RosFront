import { BaseDto } from "../../generic/base.dto";
import { RiskLevelDto } from "./risk-level.dto";
import { RiskAssesmentClientByLevelDto } from "./risk-assesment-client-by-level.dto";

export class RiskClientComboBoxDto extends BaseDto {
  constructor(
    public Id?: string,
    public RiskLevel?: RiskLevelDto,
    public RiskLevelId?: number,
    public Description?: string,
    public Value?: boolean,
    public RiskAssesmentClientByLevel?: RiskAssesmentClientByLevelDto
  ) {
    super();
    this.RiskAssesmentClientByLevel = new RiskAssesmentClientByLevelDto();
    this.RiskLevel = new RiskLevelDto();
  }
}
