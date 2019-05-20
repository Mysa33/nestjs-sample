import { Module } from '@nestjs/common';
//mport { HttpModule} from '@nestjs/common';
import { RouterModule } from 'nest-router';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Repository, EntityRepository } from 'typeorm';
import { EmployeeEntity } from './entities/employee.entity';
import { EmployeeDto } from './dtos/employee.dtos';
import { routes } from './routes.const';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeEntity]),
    RouterModule.forRoutes(routes),
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
