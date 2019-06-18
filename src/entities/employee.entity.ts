import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsDate, IsBoolean } from 'class-validator';

@Entity()
export class EmployeeEntity {


    @PrimaryGeneratedColumn({name:'employee_id', type :'int'})
    id: number;

    @ApiModelProperty()
    @Column()
    lastName: string;

    @ApiModelProperty()
    @Column()
    firstName: string;

    @ApiModelProperty()
    @Column()
    email: string;

    @ApiModelProperty()
    @CreateDateColumn({type:'timestamp'})
    createdAt: Date;

    @ApiModelProperty()
    @Column({type :'boolean', default: true})
    isActive: boolean;

    @ApiModelProperty()
    @Column({type :'int', default: 20})
    depId: number;

    @ApiModelProperty()
    @Column({type :'int', default: 0})
    salary: number;

}