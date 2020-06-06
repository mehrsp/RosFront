import { BaseDto } from "../../generic/base.dto";
import { AbuseDto } from "./abuse.dto";
import { SafeguardingDto } from "./safeguarding.dto";

export class SafeguardingAbuseDto extends BaseDto {
  constructor(
    public Id?: number,
    public Abuse?: AbuseDto,
    public AbuseId?: number,
    public Safeguarding?: SafeguardingDto,
    public SafeguardingId?: number
  ) {
    super();
  }
}
