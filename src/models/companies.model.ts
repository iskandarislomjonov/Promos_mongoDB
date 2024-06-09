import { Schema, model } from "mongoose";

export const schema =new Schema({
    name:{
        type:String,
        required:true
    }
    },
    {
        timestamps:true,
    }
    );


export const ComanyModel=model("Company",schema)