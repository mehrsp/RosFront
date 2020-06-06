import { BaseDto } from './../../generic/base.dto';
import { ClientDto } from "../client.dto";
import { PhysicalHealthDto } from "./physical-health.dto";

export class ClientPhysicalHealthDto extends BaseDto {
  constructor(
    public Id?: number,
    public Client?: ClientDto,
    public ClientId?: number,
    public PhysicalHealth?: PhysicalHealthDto,
    public PhysicalHealthId?: number
  ) {
    super();
  }
}
