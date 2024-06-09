import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { ProductsModule } from './products/products.module';
import { PromosModule } from './promos/promos.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Iskandar:admin@cluster0.iqoogye.mongodb.net'), UsersModule, CompaniesModule, ProductsModule, PromosModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
