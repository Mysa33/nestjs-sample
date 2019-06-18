import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import {EmployeeEntity} from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDto } from './dtos/employee.dtos';

@Injectable()
export class AppService {

    constructor(
        @InjectRepository(EmployeeEntity)
        private readonly employeeRepository : Repository<EmployeeEntity>
    ){}

    getAll(){
      return this.employeeRepository.find();  
    }

    async getOne(employeeId: number){
      const employee = await this.employeeRepository.findOne(employeeId); 
      if(employee){
        return employee;
      }else{
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      } 
    }

    async create(employeeDto:EmployeeDto){
      const employee = await this.employeeRepository.save(employeeDto);
      if(employee)
        return employee;
      throw new HttpException('Not created', HttpStatus.NOT_FOUND);
    }

    async update(employeeId: number, employeeDto: EmployeeDto){
      const employee = await this.employeeRepository.findOne(employeeId);
      if(!employee)
        return null;
        await this.employeeRepository.update(employeeId, employeeDto);
        return await this.employeeRepository.findOne(employeeId);
    }

    async remove(employeeId: number){
      const employee = await this.employeeRepository.findOne(employeeId);
      if(!employee)
        return null;
      this.employeeRepository.remove(employee);
      return employee;
    }
}
