import { BaseDto } from './../generic/base.dto';
import { UserDto } from '../authentication/user.dto';
import { TeamDto } from "./team.dto";

export class UserTeamDto extends BaseDto {
  constructor(
    public Id?: number,
    public Name?: string,
    public User?: UserDto,
    public UserId?: number,
    public Team?: TeamDto,
    public TeamId?: number
  ) {
    super();
  }

}
