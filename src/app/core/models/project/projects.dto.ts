import { BaseDto } from '../generic/base.dto';
import { ProjectDto } from './project.dto';

export class ProjectDtos extends BaseDto {
	constructor(
		public Projects?: ProjectDto[]
	) {
		super();
		this.Projects = [];
	}
}

