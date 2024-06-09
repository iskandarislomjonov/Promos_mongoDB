import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel("Order") private readonly orders:Model<any>)
  {

  }

  async create( {sum,promoSum}: CreateOrderDto) {
    return  await this.orders.create({sum,promoSum});
  }

  findAll() {
    return this.orders.find();
  }

  findOne(id: string) {
    return this.orders.findById({id});
  }

  update(id: string, {sum,promoSum}: UpdateOrderDto) {
    return this.orders.findByIdAndUpdate({id,
      $set:{
        sum,promoSum
      }
    });
  }

  remove(id: string) {
    return this.orders.findByIdAndDelete({id});
  }
}
