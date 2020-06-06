import { AreaDto } from "./area.dto";
import { BaseDto } from "../../generic/base.dto";
import { ClientDto } from "../client.dto";

export class GoalDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string,
    public Description?: string,
    public StartDate?: Date,
    public Start?: string,
    public Achieve?: string,
    public AchievedDate?: Date,
    public Area?: AreaDto,
    public AreaId?: number,
    public Status?: string,
    public Complete?: string,
    public Client?: ClientDto,
    public ClientId?: number,
    public ClientSignature?: string,
    public ClientSignatureDate?: Date,
    public SupportWorkerSignature?: string,
    public SupportWorkerSignatureDate?: Date
  ) {
    super();
  }
}
