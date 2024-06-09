import { Module } from '@nestjs/common';
import { PromosService } from './promos.service';
import { PromosController } from './promos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {schema} from "../models/promos.model"
@Module({
  imports:[MongooseModule.forFeature([{schema,name:"Promo"}])],
controllers: [PromosController],
  providers: [PromosService],
})
export class PromosModule {}
