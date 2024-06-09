import { Injectable } from '@nestjs/common';
import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PromosService {
  constructor(@InjectModel("Promo") private readonly promos:Model<any>)
  {

  }
  create({promo}: CreatePromoDto) {
    return this.promos.create({promo});
  }

  findAll() {
    return this.promos.find()
  }

  findOne(id: string) {
    return this.promos.findById({id});
  }

  update(id: string, {promo}: UpdatePromoDto) {
    return this.promos.findByIdAndUpdate({id,
    $set:{
      promo
    }})
  }

  remove(id: string) {
    return this.promos.findByIdAndDelete({id})
  }
}
