import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import {EmployeeEntity} from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository : Repository<EmployeeEntity>
  ){}

  getAll(){
    return this.employeeRepository.find();  
  }

}
