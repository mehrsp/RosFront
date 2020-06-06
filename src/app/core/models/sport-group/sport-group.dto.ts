import { BaseDto } from '../generic/base.dto';
import { SportGroupDetailDto } from './sport-group-detail.dto';
import { SportsCategoryDto } from '../base/sports-category.dto';

export class SportGroupDto extends BaseDto {
    constructor(
        public Id?: number,
        public StartTime?: string,
        public EndTime?: string,
        public CoachId?: string,
        public SportsCategory?: SportsCategoryDto,
        public SportsCategoryId?: string,
        public SportGroupDetails?: SportGroupDetailDto[]
    ) {
        super();
    }
}
