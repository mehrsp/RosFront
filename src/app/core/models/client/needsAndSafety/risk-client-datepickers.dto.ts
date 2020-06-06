import { BaseDto } from "../../generic/base.dto";
import { RiskClientDatePickerDto } from "./risk-client-datepicker.dto";

export class RiskClientDatePickersDto extends BaseDto {
  constructor(
    public RiskClientDatePickers?: RiskClientDatePickerDto[]
  ) {
    super();
    this.RiskClientDatePickers = [];
  }
}
