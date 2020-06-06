import { BaseDto } from './../generic/base.dto';
import { RoleDto } from './role.dto';

export class RoleDtos extends BaseDto {
	constructor(
		public Roles?: RoleDto[]
	) {
		super();
		this.Roles = [];
	}
}
