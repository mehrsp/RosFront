
export class AuthenticationDto {
  constructor(
    public id?: number,
    public userId?: number,
    public access_token?: string,
    public acl?: string[],
    public roles?: string[]
  ) {
    this.roles = [];
    this.acl = [];
    this.access_token='';
  }
}
