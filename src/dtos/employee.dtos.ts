import { ApiModelProperty } from "@nestjs/swagger";

export class EmployeeDto{
    
    @ApiModelProperty()
    public lastName:string;
    @ApiModelProperty()
    public firstName:string;
    @ApiModelProperty()
    public depId:number

}