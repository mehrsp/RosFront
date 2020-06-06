import { BaseDto } from './../../generic/base.dto';

export class AreaOfRecoveryDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string
  ) {
    super();
  }
}
