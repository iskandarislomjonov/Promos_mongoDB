import { Schema, model } from "mongoose";


export const schema:Schema=new Schema({
name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
companyId:{
    type:Schema.Types.ObjectId,
    ref:"Company",
    required:true
}
},
{
    timestamps:true,
}
);


export const ProductModel=model('Product',schema)