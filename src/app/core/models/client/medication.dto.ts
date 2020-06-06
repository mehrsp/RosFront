import { BaseDto } from "../generic/base.dto";
import { HealthDiagnosticDto } from "./health/health-diagnostic.dto";
import { PhysicalHealthDto } from "./health/physical-health.dto";

export class MedicationDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string,
    public Diagnosis?: string,
    public Dosage?: string,
    public Duration?: number,
    public FromDate?: any,
    public ToDate?: any,
    public HealthDiagnostic?: HealthDiagnosticDto,
    public HealthDiagnosticId?: number,
    public PhysicalDiagnostic?: PhysicalHealthDto,
    public PhysicalDiagnosticId?: number,
    public SelfMedicated?: boolean
  ) {
    super();
  }
}

