import { BaseDto } from './../../generic/base.dto';

export class HealthDiagnosticDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string
  ) {
    super();
  }
}
