import { Injectable,  } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel("Product") private readonly products:Model<any>)
  {

  }
  create({name,price}: CreateProductDto) {
    return this.products.create({name,price});
  }

  findAll() {
    return this.products.find();
  }

  findOne(id:string) {
    return this.products.findById({id});
  }

  update(id: string, {name,price}: UpdateProductDto) {
    return this.products.findByIdAndUpdate({id,
      $set:{
        name,price
      }
    });
  }

  remove(id:String) {
    return this.products.findByIdAndDelete({id});
  }
}
