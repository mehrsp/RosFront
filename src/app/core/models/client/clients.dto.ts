import { BaseDto } from './../generic/base.dto';
import { ClientDto } from './client.dto';

export class ClientsDto extends BaseDto {
	constructor(
		public Clients?: ClientDto[]
	) {
		super();
		this.Clients = [];
	}
}
