import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './entities/employee.entity';
import { EmployeeDto } from './dtos/employee.dtos';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeEntity]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'dexdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      keepConnectionAlive: true,
      retryAttempts: 2,
      retryDelay: 1000
    }),
    Repository,
    EmployeeEntity,
    EmployeeDto
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
