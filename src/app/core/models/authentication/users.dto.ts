import { BaseDto } from '../generic/base.dto';
import { UserDto } from './user.dto';

export class UserDtos extends BaseDto {
	constructor(
		public Users?: UserDto[]
	) {
		super();
		this.Users = [];
	}
}
