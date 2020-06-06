import { BaseDto } from "../generic/base.dto";
import { PermissionDto } from "./permission.dto";
import { RoleDto } from "./role.dto";
import { List } from "lodash";
import { MemberDto } from "../members/member.dto";

export class UserDto extends BaseDto {
	constructor(
		public UserId?: number,
        public UserName?: string,
        public DisplayName?: string,
        public IsActive?: boolean,
        public LastLoggedIn?: Date,
        public Password?: string,
        public Roles?: List<RoleDto>,
        public ConfirmationCode?: number,
        public Imei?: string,
        public DeviceType?: string,
        public DeviceToken?: string,
        public IsCaller?: boolean,
        public Member?: MemberDto,
		public Id?: number,
		public Phone?: number,
		public SerialNumber?: string,
		public Permissions?: PermissionDto[]
	) {
		super();
		this.Permissions = [];
        this.Roles = [];
        this.Member = new MemberDto();
	}
}
