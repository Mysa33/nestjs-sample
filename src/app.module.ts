import { Module } from '@nestjs/common';
import { HttpModule} from '@nestjs/common';
import { RouterModule } from 'nest-router';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeEntity } from './entities/employee.entity';

@Module({
  imports: [
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
    TypeOrmModule.forFeature([EmployeeEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
