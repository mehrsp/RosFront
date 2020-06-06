import { BaseDto } from '../generic/base.dto';

export class RelationDto extends BaseDto {
    constructor(
        public Id?: number,
        public Name?: string
    ) {
        super();
    }


}
