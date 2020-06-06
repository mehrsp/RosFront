import { BaseDto } from './../../generic/base.dto';
import { AreaOfRecoveryDto } from './area-of-recovery.dto';
import { UserDto } from '../../authentication/user.dto';

export class AreaDto extends BaseDto {
  constructor(
    public Id?: number,
    public AreaName?: string,
    public AreaOfRecovery?: AreaOfRecoveryDto,
    public AreaOfRecoveryId?: number,
    public CreatedBy?: UserDto,
    public CreatedById?: number,
    public CreatedDate?: Date
  ) {
    super();
  }
}
