import { BaseDto } from './../../generic/base.dto';
import { ClientDto } from "../client.dto";
import { IncomeTypeDto } from "./income-type.dto";

export class ClientIncomeDto extends BaseDto {
  constructor(
    public Id?: number,
    public RefrenceNumber?: string,
    public PaymentFrequency?: number,
    public PaymentFrequencyShow?: string,
    public Amount?: string,
    public Status?: string,
    public Client?: ClientDto,
    public ClientId?: number,
    public IncomeType?: IncomeTypeDto,
    public IncomeTypeId?: number
  ) {
    super();
  }
}





