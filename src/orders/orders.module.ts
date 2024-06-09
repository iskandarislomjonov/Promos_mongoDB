import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { schema}from "../models/orders.model"
@Module({
  imports:[MongooseModule.forFeature([{schema,name:"Order"}])],
controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
