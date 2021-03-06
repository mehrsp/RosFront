import { BaseDto } from "../generic/base.dto";

export class ClientStatusDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string
  ) {
    super();
  }
}
