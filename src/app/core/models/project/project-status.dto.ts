import { BaseDto } from "../generic/base.dto";
import { ProjectDto } from "./project.dto";

export class ProjectStatusDto extends BaseDto {
    constructor(
        public Id?: number,
        public Status?: number,
        public Description?: string,
        public Date?: Date,
        public Project?: ProjectDto,
        public ProjectId?: number
    ) {
        super();
    }
}

