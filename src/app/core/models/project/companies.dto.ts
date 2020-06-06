import { BaseDto } from '../generic/base.dto';
import { CompanyDto } from './company.dto';

export class CompanyDtos extends BaseDto {
	constructor(
		public Companys?: CompanyDto[]
	) {
		super();
		this.Companys = [];
	}
}
