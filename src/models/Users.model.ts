import { Schema, model } from "mongoose";

export const schema:Schema=new Schema({
name:{
    type:String,
    required:true
}
},
{
    timestamps:true,
}
);


export const UserModel=model('User',schema)