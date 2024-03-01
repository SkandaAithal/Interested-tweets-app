import { IsNotEmpty } from "class-validator";

export class CreateInterestDto {

    @IsNotEmpty()
    interest:string

    @IsNotEmpty()
    userid:number
}
