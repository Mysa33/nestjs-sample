import { RouterModule, Routes } from 'nest-router';
import { AppModule } from './app.module';
import { AppController } from './app.controller';

export const routes: Routes = [{
    path: '/api.acme.com/v1',
    module: AppController,
    
}];