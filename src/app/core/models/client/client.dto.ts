import { BaseDto } from './../generic/base.dto';
import { AddressDto } from '../contact/address.dto';
import { CountryDto } from '../contact/country.dto';
import { EthnicOriginDto } from './info/ethnic-origin.dto';
import { LanguageDto } from './info/language.dto';
import { ReligionDto } from './info/religion.dto';
import { HealthDiagnosticDto } from './health/health-diagnostic.dto';
import { HealthSupportLevelDto } from './health/health-support-level.dto';
import { PhysicalHealthDto } from './health/physical-health.dto';
import { ClientStatusDto } from './client-status.dto';
import { DocumentDto } from '../document/document.dto';
import { ProjectDto } from '../project/project.dto';
import { UserDto } from '../authentication/user.dto';

export class ClientDto extends BaseDto {
	constructor(
		public Name?: string,
		public Surname?: string,
		public MiddleName?: string,
		public Nikname?: string,
		public Address?: AddressDto,
		public AddressId?: number,
		public MobileNo?: number,
		public EmailAddress?: string,
		public NationalInsuranceNumber?: string,
		public HBReferenceNo?: string,
		public Gender?: number,
		public Country?: CountryDto,
		public CountryId?: number,
		public DOB?: Date,
		public Age?: number,
		public EthnicOrigin?: EthnicOriginDto,
		public EthnicOriginId?: number,
		public FirstLanguageInterpreterNeeded?: boolean,
		public Language?: LanguageDto,
		public LanguageId?: number,
		public Religion?: ReligionDto,
		public ReligionId?: number,
		public Sexuality?: number,
		public IsClientPregnant?: boolean,
		public ExpectedDeliveryDate?: Date,
		public HasPet?: boolean,
		public NOKName?: string,
		public NOKPostalAddress?: number,
		public NOKRelationship?: string,
		public NOKTelNo?: number,
		public NOKMobileNumber?: number,
		public Id?: number,
		public HealthDiagnostic?: HealthDiagnosticDto,
		public HealthDiagnosticId?: number,
		public HealthSupportLevel?: HealthSupportLevelDto,
		public HealthSupportLevelId?: number,
		public MentalHealthBrief?: string,
		public PhisicalHealthBrief?: string,
		public NHSNumber?: string,
		public AddmisionDate?: Date,
		public PhysicalDiagnostic?: PhysicalHealthDto,
		public PhisicalDiagnosticId?: number,
		public Status?: ClientStatusDto,
		public StatusId?: number,
		public Photo?: DocumentDto,
		public PhotoId?: number,
		public Project?: ProjectDto,
		public ProjectId?: number,
		public SupportWorker?: UserDto,
		public SupportWorkerId?: number,
		public NameFamily?: string,
		public DOBfilter?: string,
		public AdmitionDateFilter?: string,
		public IsTerminated?: boolean,
		public ExternalProfessional?: UserDto,
		public ExternalProfessionalId?: number
	) {
		super();
	}
}

