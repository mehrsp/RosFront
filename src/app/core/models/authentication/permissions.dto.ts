import { BaseDto } from './../generic/base.dto';
import { PermissionDto } from './permission.dto';

export class PermissionDtos extends BaseDto {
	constructor(
		public Permissions?: PermissionDto[]
	) {
		super();
		this.Permissions = [];
	}
}
