import { Schema, model } from "mongoose";


export const schema:Schema=new Schema({
promoId:{
    type:Schema.Types.ObjectId,
    ref:"Promo",
    required:true
},
productId:{
    type:Schema.Types.ObjectId,
    ref:"Product",
    required:true
},
companyId:{
    type:Schema.Types.ObjectId,
    ref:"Company",
    required:true
},

sum:{ 
    type:Number,
    required:true
},
promoSum:{ 
    type:Number,
    required:true
}

},
{
    timestamps:true,
}
);


export const OrderModel=model('Order',schema)