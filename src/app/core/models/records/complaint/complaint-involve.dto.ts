import { BaseDto } from "../../generic/base.dto";
import { ComplaintDto } from "./complaint.dto";
import { UserDto } from "../../authentication/user.dto";
import { ClientDto } from "../../client/client.dto";

export class ComplaintInvolveDto extends BaseDto {
  constructor(
    public Id?: number,
    public Complaint?: ComplaintDto,
    public ComplaintId?: number,
    public Staff?: UserDto,
    public StaffId?: number,
    public Client?: ClientDto,
    public ClientId?: number,
    public ShowType?: string,
    public ExternalProfessional?: UserDto,
    public ExternalProfessionalId?: number
  ) {
    super();
  }
}
