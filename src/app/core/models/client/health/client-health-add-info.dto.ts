import { BaseDto } from "../../generic/base.dto";
import { ClientDto } from "../client.dto";
import { HealthAdditionalInfoDto } from "./health-additional-info.dto";

export class ClientHealthAddInfoDto extends BaseDto {
  constructor(
    public Id?: number,
    public Client?: ClientDto,
    public ClientId?: number,
    public HealthAdditionallInfo?: HealthAdditionalInfoDto,
    public HealthAdditionalInfoId?: number
  ) {
    super();
  }
}
