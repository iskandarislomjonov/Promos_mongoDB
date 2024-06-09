import { Schema, model } from "mongoose";

export const schema:Schema=new Schema({
promo:{
    type:String,
    required:true
},
companyId:{
    type:Schema.Types.ObjectId,
    ref:"Company",
    required:true
},
userId:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
}
},
{
    timestamps:true,
}
);


export const PromoModel=model('Promo',schema)