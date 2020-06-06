import { BaseDto } from '../generic/base.dto';
import { AccommodationDto } from './accommodation.dto';

export class AccommodationDtos extends BaseDto {
	constructor(
		public Accommodations?: AccommodationDto[]
	) {
		super();
		this.Accommodations = [];
	}
}
