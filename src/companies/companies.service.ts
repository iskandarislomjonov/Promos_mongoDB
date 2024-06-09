import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CompaniesService {
  constructor(@InjectModel("Company") private readonly companies:Model<any>)
  {

  }
  async create({name}: CreateCompanyDto) {
    return await this.companies.create({name});
  }

  async  findAll() {
    return await this.companies.find();
  }

  findOne(id:string) {
    return this.companies.findById({id});
  }

  update(id: string, {name}: UpdateCompanyDto) {
    return this.companies.findByIdAndUpdate({id,
    $set:{
      name
    }});
  }

  remove(id: string) {
    return this.companies.findByIdAndDelete({id});
  }
}
