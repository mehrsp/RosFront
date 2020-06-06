import { BaseDto } from './../../generic/base.dto';

export class PhysicalHealthDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string
  ) {
    super();
  }
}
