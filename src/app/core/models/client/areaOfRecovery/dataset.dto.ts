import { BaseDto } from './../../generic/base.dto';

export class DatasetDto extends BaseDto {
  constructor(
    public label?: string,
    public backgroundColor?: string,
    public borderColor?: string,
    public pointBackgroundColor?: string,
    public pointBorderColor?: string,
    public pointHoverBackgroundColor?: string,
    public pointHoverBorderColor?: string,
    public data?: any[]
  ) {
    super();
  }
}
