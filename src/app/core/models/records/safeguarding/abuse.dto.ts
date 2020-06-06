import { BaseDto } from "../../generic/base.dto";

export class AbuseDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string
  ) {
    super();
  }
}
