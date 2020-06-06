import { BaseDto } from './../../generic/base.dto';
import { AreaDto } from "./area.dto";
import { AorReportDto } from "./aor-report.dto";

export class AreaReportDto extends BaseDto {
  constructor(
    public Id?: number,
    public Area?: AreaDto,
    public AreaId?: number,
    public UserComment?: string,
    public Score?: number,
    public AorReport?: AorReportDto,
    public AorReportId?: number,
    public CreatedDate?: Date
  ) {
    super();
  }
}
