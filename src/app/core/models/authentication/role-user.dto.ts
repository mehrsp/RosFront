import { BaseDto } from './../generic/base.dto';
import { RoleDto } from "./role.dto";
import { UserDto } from "./user.dto";

export class RoleUserDto extends BaseDto {
  constructor(
    public Id?: number,
    public RoleId?: number,
    public Role?: RoleDto,
    public UserId?: number,
    public User?: UserDto
  ) {
    super();
  }
}
