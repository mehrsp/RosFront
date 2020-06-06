import { BaseDto } from './../../generic/base.dto';

export class HealthSupportLevelDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string
  ) {
    super();
  }
}
