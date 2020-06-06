import { BaseDto } from "../../generic/base.dto";
import { GoalDto } from "./goal.dto";
import { ItemTypeDto } from "./item-type.dto";
import { UserDto } from "../../authentication/user.dto";

export class ItemDto extends BaseDto {
  constructor(
    public Id?: number,
    public Goal?: GoalDto,
    public GoalId?: number,
    public Description?: string,
    public Type?: ItemTypeDto,
    public TypeId?: number,
    public CreatedDate?: Date,
    public CreatedBy?: UserDto,
    public CreatedById?: number
  ) {
    super();
  }

}
