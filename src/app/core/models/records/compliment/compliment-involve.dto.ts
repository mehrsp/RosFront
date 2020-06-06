import { BaseDto } from "../../generic/base.dto";
import { UserDto } from "../../authentication/user.dto";
import { ComplimentDto } from "./compliment.dto";
import { ClientDto } from "../../client/client.dto";

export class ComplimentInvolveDto extends BaseDto {
  constructor(
    public Id?: number,
    public Compliment?: ComplimentDto,
    public ComplimentId?: number,
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
