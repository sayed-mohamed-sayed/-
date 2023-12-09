import { Schema ,model  ,models } from "mongoose";


const userschema=new Schema({
name :String ,
email :String ,
password:String
})

const Users=models.user ||model("user" ,userschema)

export default Users
