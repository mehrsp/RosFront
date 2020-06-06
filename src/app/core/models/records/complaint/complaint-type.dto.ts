import { BaseDto } from "../../generic/base.dto";

export class ComplaintTypeDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string
  ) {
    super();
  }
}
