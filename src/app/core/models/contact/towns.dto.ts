import { BaseDto } from './../generic/base.dto';
import { TownDto } from './town.dto';

export class TownsDto extends BaseDto {
	constructor(
		public Towns?: TownDto[]
	) {
		super();
		this.Towns = [];
	}
}
