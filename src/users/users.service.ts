import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserModel } from 'src/models/Users.model';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private readonly users:Model<any>)
  {

  }
  async create({name}: CreateUserDto) {
    const data= await this.users.create({name});
    return {message:"Success",data}
  }

  findAll() {
    return this.users.find();
  }

  async findOne(id: number) {
    return  await this.users.findById({id});
  }

  update(id: string, {name}: UpdateUserDto) {
    return this.users.findByIdAndUpdate(id, {
      $set: 
      {
        name
      }
    });
  }

  remove(id:string) {
    return this.users.findByIdAndDelete({id});
  }
}
