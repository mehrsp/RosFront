import { BaseDto } from '../generic/base.dto';
import { ServiceLevelDto } from './service-level.dto';

export class ServiceLevelsDto extends BaseDto {
	constructor(
		public ServiceLevels?: ServiceLevelDto[]
	) {
		super();
		this.ServiceLevels = [];
	}
}


