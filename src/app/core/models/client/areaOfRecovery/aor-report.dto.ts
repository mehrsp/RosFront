import { BaseDto } from './../../generic/base.dto';
import { ClientDto } from "../client.dto";
import { UserDto } from "../../authentication/user.dto";

export class AorReportDto extends BaseDto {
  constructor(
    public Id?: number,
    public ReportDate?: Date,
    public Report?: string,
    public Client?: ClientDto,
    public ClientId?: number,
    public TempDate?: string,
    public Color?: string,
    public CreatedBy?: UserDto,
    public CreatedById?: number
  ) {
    super();
  }
}
