import { BaseDto } from "../generic/base.dto";

export class FolderDto extends BaseDto {

  constructor(
    public Id: number,
    public ParentId: number,
    public Name: string,
    public Description: string,
    public IsPrivate: boolean
  ) {
    super();
  }

}
