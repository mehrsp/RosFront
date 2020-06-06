import { BaseDto } from './../generic/base.dto';

export class SearchDto extends BaseDto {
    constructor(
        public serialNumber?: string
    )  {
        super();
    }
}