import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class EmployeeEntity {


    @PrimaryGeneratedColumn({name:'employee_id', type :'int'})
    id: number;

    @Column()
    lastName: string;

    @Column()
    firstName: string;

    @Column()
    email: string;

    @CreateDateColumn({type:'timestamp'})
    createdAt: Date;

    @Column({type :'boolean', default: true})
    isActive: boolean;

    @Column({type :'int', default: 20})
    depId: number;

    @Column({type :'int', default: 0})
    salary: number;

    

}