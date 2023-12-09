import mongoose from "mongoose";
import connect from "../utlss/Connect"
connect()

const productschema=new mongoose.Schema({
title:String,
price:String,
taxes:String,
ads:String,
discount:String,
count:String,
catergoy:String



})

export default mongoose.models.Product || mongoose.model("Product", productschema);
