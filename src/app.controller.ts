import { Controller,Header, Get, Logger, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly _employeeService: AppService) {}

  @Get('getAllArticles')
  @Header('Cache-Control', 'none')
  getAll(){
    Logger.log("Get all articles", "BlogController");
    return this._employeeService.getAll();
  }
}
