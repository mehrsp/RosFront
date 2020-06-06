import { BaseDto } from "../../generic/base.dto";
import { AgencyDto } from "../../contact/agency.dto";
import { IncidentDto } from "./Incident.dto";

export class IncidentAgencyDto extends BaseDto {
  constructor(
    public Id?: number,
    public Agency?: AgencyDto,
    public AgencyId?: number,
    public Incident?: IncidentDto,
    public IncidentId?: number
  ) {
    super();
  }
}
