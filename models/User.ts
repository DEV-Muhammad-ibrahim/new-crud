import mongoose, { Schema } from "mongoose";



interface User {
  name:string,
  email:string,
  password:string,
}

const UserSchema:Schema = new Schema(
{
  name:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
},{
  timestamps:true
}
);

const User = mongoose.model<User>("newUser",UserSchema)

export default  User;