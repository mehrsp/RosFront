import { BaseDto } from '../generic/base.dto';

export class AgeDto extends BaseDto {
    constructor(
        public Id?: number,
        public Name?: string
    ) {
        super();
    }


}
