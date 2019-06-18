import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EmployeeDto{
    
    @ApiModelProperty()
    public lastName:string;

    @ApiModelProperty()
    public firstName:string;
    
    @ApiModelProperty()
    public email:string;

    @ApiModelProperty()
    public depId:number

}