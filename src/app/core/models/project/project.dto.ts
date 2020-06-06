import { BaseDto } from '../generic/base.dto';
import { ServiceLevelDto } from './service-level.dto';
import { ProjectStatusDto } from "./project-status.dto";
import { TeamDto } from '../team/team.dto';
import { UserDto } from '../authentication/user.dto';
import { AddressDto } from '../contact/address.dto';

export class ProjectDto extends BaseDto {
	constructor(
		public Id?: number,
		public Name?: string,
		public ServiceLevel?: ServiceLevelDto,
		public ServiceLevelId?: number,
		public Address?: AddressDto,
		public AddressId?: number,
		public Nflats?: number,
		public Team?: TeamDto,
		public TeamId?: number,
		public ProjectStatus?: ProjectStatusDto,
		public Status?: number,
		//just for global search show
		public StatusShow?: string,
		public CreatedDate?: Date,
		public CreatedBy?: UserDto,
		public CreatedById?: number,
		public ModifiedDate?: Date,
		public ModifiedBy?: UserDto,
		public ModifiedById?: number
	) {
		super();
		this.ProjectStatus = new ProjectStatusDto();
	}
}
