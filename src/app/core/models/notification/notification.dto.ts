export class NotificationDto {
    constructor(
        public Id?: number,
        public UserId?: number,
        public Content?: string,
        public Icon?: string,
        public RequestQuery?: string,
        public CreatedDate?: Date,
        public CheckedDate?: Date,
        public IsChecked?: boolean,
        public Type?: string
    ) { }
}
