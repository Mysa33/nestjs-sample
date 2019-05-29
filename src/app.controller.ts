import { Controller,Header, Get, Logger, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { EmployeeDto } from './dtos/employee.dtos';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';
@Controller()
export class AppController {
  
  constructor(private readonly _employeeService: AppService) {}

  //Get all
  @Get()
  @Header('Cache-Control', 'none')
  @ApiOperation({
    description: 'Get all employees',
    title: 'Get all',
    operationId: 'GET /employees'
  })
  @ApiResponse({ status: 200, description: 'Get all employees' })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  getAll(){
    Logger.log("Get all employees", "EmployeeController");
    return this._employeeService.getAll();
  }

  //Get one
  @Get(':emplyeeId')
  @Header('Cache-Control', 'none')
  @ApiOperation({
    description: 'Get one employee',
    title: 'Get one',
    operationId: 'GET /employees'
  })
  @ApiResponse({ status: 200, description: 'Get an employees' })
  @ApiResponse({ status: 400, description: "Missing info: employeeId" })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async getOne(@Param('employeeId') employeeId:number) {
    Logger.log("get one employee", "AppController");
    const employee = await this._employeeService.getOne(employeeId);
    if(employee){
      return employee;
    }else{
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }   
  }

  //Create one
  @Post()
  @Header('Cache-Control', 'none')
  @ApiOperation({
    description: 'Create an employee',
    title: 'Create one',
    operationId: 'POST /employees'
  })
  @ApiResponse({ status: 200, description: 'Create an employees' })
  @ApiResponse({ status: 400, description: "Missing info: employeeId" })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async create(@Body() employeeDto:EmployeeDto) {
    Logger.log("Create an employee", "AppController");
    const employee = await this._employeeService.create(employeeDto);
    if(employee)
      return employee;
    throw new HttpException('Employee not created', HttpStatus.NOT_MODIFIED)
  }

  //Update one
  @Put(':employeeId')
  @Header('Cache-Control', 'none')
  @ApiOperation({
    description: 'Update an employee',
    title: 'Update one',
    operationId: 'POST /employees'
  })
  @ApiResponse({ status: 200, description: 'Update an employees' })
  @ApiResponse({ status: 400, description: "Missing info: employeeId and/or employeeDto" })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async update(@Param('employeeId')employeeId, @Body() employeeDto:EmployeeDto){
    Logger.log("Update an employee", "AppController");
    const employee = await this._employeeService.update(employeeId, employeeDto);
    if(employee)
      return employee;
    throw new HttpException('Employee not modified', HttpStatus.NOT_MODIFIED);
  }

  //Delete one
  @Delete(':employeeId')
  @Header('Cache-Control', 'none')
  @ApiOperation({
    description: 'Delete one employee',
    title: 'Delete one',
    operationId: 'DELETE /employees'
  })
  @ApiResponse({ status: 200, description: 'Delete an employees' })
  @ApiResponse({ status: 400, description: "Missing info: employeeId" })
  @ApiResponse({ status: 403, description: "Unauthorized" })
  @ApiResponse({ status: 404, description: "Not found" })
  @ApiResponse({ status: 500, description: "Internal server error" })
  async remove(@Param('employeeId') employeeId:number){
    Logger.log("Remove an employee", "BlogController");
    const employee = await this._employeeService.remove(employeeId);
    if(employee)
      return employee;
    throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
  }

}
