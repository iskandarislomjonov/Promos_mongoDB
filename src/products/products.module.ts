import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {schema} from '../models/products.model'
@Module({
  imports:[MongooseModule.forFeature([{schema,name:"Product"}])],
controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
