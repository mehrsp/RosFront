import { SupplierDto } from './../members/supplier.dto';
import { List } from "lodash";

import { BaseDto } from "../generic/base.dto";

export class TagDto extends BaseDto {

	constructor(
        public Id?: number,
        public Name?: string,
        public TypeId?: number
	) {
		super();
	}
}