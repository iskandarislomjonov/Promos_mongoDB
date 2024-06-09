import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {schema} from '../models/companies.model'


@Module({
  imports:[MongooseModule.forFeature([{schema,name:"Company"}])],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
