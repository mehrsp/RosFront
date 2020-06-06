import { BaseDto } from '../generic/base.dto';
import { SportGroupDto } from './sport-group.dto';

export class SportGroupDetailDto extends BaseDto {
    constructor(
        public Id?: number,
        public Day?: string,
        public SportGroup?: SportGroupDto,
        public SportGroupId?: number
    ) {
        super();
    }
}
