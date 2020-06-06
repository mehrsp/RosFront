import { BaseDto } from './../../generic/base.dto';
import { TownDto } from '../../contact/town.dto';

export class TownsDto extends BaseDto{
	constructor() {
		super();
		this.Towns = [];
	}
	public Towns: TownDto[];
}
