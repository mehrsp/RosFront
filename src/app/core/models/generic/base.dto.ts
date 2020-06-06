import { ExceptionDto } from "./exception.dto";

export class BaseDto {
  public Exceptions: ExceptionDto[];
  public isValid(): boolean {
    return !(this.Exceptions.length > 0)
  }
  public getException(): string {
    return this.Exceptions[0].Title + "\n" + this.Exceptions[0].Message;
  }
}
