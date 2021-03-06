import { BaseDto } from "../../generic/base.dto";

export class HealthAdditionalInfoDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string
  ) {
    super();
  }
}
