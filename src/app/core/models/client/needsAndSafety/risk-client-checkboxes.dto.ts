import { BaseDto } from "../../generic/base.dto";
import { RiskClientCheckboxDto } from "./risk-client-checkbox.dto";

export class RiskClientCheckboxesDto extends BaseDto {
  constructor(
    public RiskClientCheckboxs?: RiskClientCheckboxDto[]
  ) {
    super();
    this.RiskClientCheckboxs = [];
  }
}
