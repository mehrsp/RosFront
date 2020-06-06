import { BaseDto } from './../../generic/base.dto';

export class ItemTypeDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string
  ) {
    super();
  }
}
