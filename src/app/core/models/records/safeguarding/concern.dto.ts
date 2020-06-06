import { BaseDto } from "../../generic/base.dto";

export class ConcernDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string
  ) {
    super();
  }
}
