import { BaseDto } from './../../generic/base.dto';
import { ClientDto } from '../client.dto';
import { MedicationDto } from '../medication.dto';

export class ClientMedicationDto extends BaseDto {
  constructor(
    public Id?: number,
    public Client?: ClientDto,
    public ClientId?: number,
    public Medication?: MedicationDto,
    public MedicationId?: number
  ) {
    super();
  }
}
