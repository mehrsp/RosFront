import { BaseDto } from "../../generic/base.dto";
import { RiskSectionDto } from "./risk-section.dto";
import { RiskClientCheckboxDto } from "./risk-client-checkbox.dto";
import { RiskClientComboBoxDto } from "./risk-client-combobox.dto";
import { RiskClientDatePickerDto } from "./risk-client-datepicker.dto";
import { RiskClientTextBoxDto } from "./risk-client-textbox.dto";
import { RiskPeriodItemDto } from "./risk-period-item.dto";
import { RiskClientFieldBaseDto } from "./risk-client-fieldbase.dto";

export class RiskAssesmentClientByLevelDto extends BaseDto {
  constructor(
    public Name?: string,
    public Section?: RiskSectionDto,
    public SectionId?: number,
    public Description?: string,
    public FiledType?: number,
    public Checkbox?: RiskClientCheckboxDto,
    public ComboBox?: RiskClientComboBoxDto,
    public DatePicker?: RiskClientDatePickerDto,
    public TextBox?: RiskClientTextBoxDto,
    public RiskPeriodItem?: RiskPeriodItemDto,
    public RiskPeriodItemId?: string,
    public Id?: string,
    public RiskClientFieldBase?: RiskClientFieldBaseDto,
    public IsTextBox?: boolean,
    public IsCheckBox?: boolean,
    public IsComboBox?: boolean,
    public IsDatePicker?: boolean
  ) {
    super();
    this.Section = new RiskSectionDto();
    this.Checkbox = new RiskClientCheckboxDto();
    this.ComboBox = new RiskClientComboBoxDto();
    this.DatePicker = new RiskClientDatePickerDto();
    this.TextBox = new RiskClientTextBoxDto();
    this.RiskPeriodItem = new RiskPeriodItemDto();
  }
}
