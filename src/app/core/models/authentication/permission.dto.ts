import { BaseDto } from './../generic/base.dto';

export class PermissionDto extends BaseDto {
	constructor(
		public Id?: number,
		public Name?: string,
		public Parent?: PermissionDto,
		public Children?: PermissionDto[]
	) {
		super();
		this.Children = [];
	}
}
