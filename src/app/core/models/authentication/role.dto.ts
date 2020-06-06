import { BaseDto } from '../generic/base.dto';
import { PermissionDto } from './permission.dto';
import { UserDto } from './user.dto';

export class RoleDto extends BaseDto {
	constructor(
		public Id?: number,
		public Name?: string,
		public Permissions?: PermissionDto[],
		public Users?: UserDto[]
	) {
		super();
	}
}
