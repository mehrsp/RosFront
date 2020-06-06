import { BaseDto } from "../../generic/base.dto";
import { RiskClientComboBoxDto } from "./risk-client-combobox.dto";

export class RiskClientComboBoxesDto extends BaseDto {
  constructor(
    public RiskClientComboBoxs?: RiskClientComboBoxDto[]
  ) {
    super();
    this.RiskClientComboBoxs = [];
  }
}
