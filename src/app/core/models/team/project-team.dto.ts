import { BaseDto } from './../generic/base.dto';
import { TeamDto } from "./team.dto";
import { ProjectDto } from '../project/project.dto';

export class ProjectTeamDto extends BaseDto {
  constructor(
    public Id?: number,
    public Project?: ProjectDto,
    public ProjectId?: number,
    public Team?: TeamDto,
    public TeamId?: number
  ) {
    super();
  }
}
