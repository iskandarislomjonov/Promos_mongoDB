import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UserModel,schema } from './../models/Users.model';

@Module({
  imports:[MongooseModule.forFeature([{schema,name:"User"}])],
controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
