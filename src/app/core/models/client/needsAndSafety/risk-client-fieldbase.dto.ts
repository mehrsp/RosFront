import { BaseDto } from "../../generic/base.dto";
import { RiskLevelDto } from "./risk-level.dto";
import { RiskAssesmentClientByLevelDto } from "./risk-assesment-client-by-level.dto";

export class RiskClientFieldBaseDto extends BaseDto {
  constructor(
    public Id?: number,
    public CheckBoxDescription?: string,
    public CheckBoxValue?: boolean,
    public DatePickerValue?: any,
    public TextBoxValue?: string,
    public RiskLevel?: RiskLevelDto,
    public RiskLevelId?: number,
    public ComboBoxDescription?: string,
    public ComboBoxValue?: boolean,
    public RiskAssesmentClientByLevel?: RiskAssesmentClientByLevelDto,
    public RiskAssesmentClientByLevelId?: number
  ) {
    super();
  }
}
