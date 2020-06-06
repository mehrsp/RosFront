import { BaseDto } from "../../generic/base.dto";
import { RiskAssesmentClientByLevelDto } from "./risk-assesment-client-by-level.dto";

export class RiskClientCheckboxDto extends BaseDto {
  constructor(
    public Id?: string,
    public Description?: string,
    public Value?: boolean,
    public RiskAssesmentClientByLevel?: RiskAssesmentClientByLevelDto
  ) {
    super();
  }
}
