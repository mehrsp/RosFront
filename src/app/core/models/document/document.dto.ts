import { BaseDto } from "../generic/base.dto";
import { FolderDto } from "./folder.dto";

export class DocumentDto extends BaseDto {

  constructor(
    public Id: number,
    public FolderId: number,
    public ClientId: number,
    public Name: string,
    public PhysicalName: string,
    public Description: string,
    public Size: number,
    public ContentType: string,
    public IsPrivate: boolean,
    public Folder: FolderDto,
    public CreatedDate: string
  ) {
    super();
  }
}
