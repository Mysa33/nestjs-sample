import { Controller,Header, Get, Logger, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { routes } from './routes.const';
import { EmployeeDto } from './dtos/employee.dtos';
import { from } from 'rxjs';
@Controller()
export class AppController {
  constructor(private readonly _employeeService: AppService) {}

  @Get('all')
  @Header('Cache-Control', 'none')
  getAll(){
    Logger.log("Get all employees", "EmployeeController");
    return this._employeeService.getAll();
  }

  @Get('getOne/:emplyeeId')
  @Header('Cache-Control', 'none')
  async getOne(@Param('employeeId')employeeId) {
    Logger.log("get one employee", "BlogController");
    const employee = await this._employeeService.getOne(employeeId);
    if(employee){
      return employee;
    }else{
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }   
  }

  @Post('createOne')
  @Header('Cache-Control', 'none')
  async create(@Body() employeeDto:EmployeeDto) {
    Logger.log("Create an employee", "AppController");
    const employee = await this._employeeService.create(employeeDto);
    if(employee)
      return employee;
    throw new HttpException('Employee not created', HttpStatus.NOT_MODIFIED)
  }

  @Put('/:employeeId')
  @Header('Cache-Control', 'none')
  async update(@Param('employeeId')employeeId, @Body() employeeDto){
    Logger.log("Update an employee", "AppController");
    const employee = await this._employeeService.update(employeeId, employeeDto);
    if(employee)
      return employee;
    throw new HttpException('Employee not modified', HttpStatus.NOT_MODIFIED);
  }

  @Delete(':employeeId')
  @Header('Cache-Control', 'none')
  async remove(@Param('employeeId') employeeId){
    Logger.log("Remove an employee", "BlogController");
    const employee = await this._employeeService.remove(employeeId);
    if(employee)
      return employee;
    throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
  }

}
