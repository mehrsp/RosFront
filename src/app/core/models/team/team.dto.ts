import { BaseDto } from './../generic/base.dto';
import { UserDto } from '../authentication/user.dto';

export class TeamDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string,
    public Manager?: UserDto,
    public ManagerId?: number,
    public CreatedBy?: UserDto,
    public CreatedById?: number,
    public CreatedDate?: any,
    public TeamSupportWorkers?: UserDto[]
  ) {
    super();
    this.Manager = new UserDto();
    this.TeamSupportWorkers= new Array<UserDto>();
  }
}
