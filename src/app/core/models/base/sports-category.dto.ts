import { BaseDto } from '../generic/base.dto';
import { List } from 'lodash';

export class SportsCategoryDto extends BaseDto {
    constructor(
        public Id?: number,
        public Name?: string,
        public Description?: string,
        public Parent?: SportsCategoryDto,
        public ParentId?: number,
        public Childrens?: List<SportsCategoryDto>
    ) {
        super();
        this.Name = '';
    }


}
