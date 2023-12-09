import mongoose from "mongoose";


async function connect(){
  try {
    await mongoose.connect("mongodb+srv://elsayed:elsayed@cluster0.f6aswaj.mongodb.net/"
  
   
   )
    
  } catch (error) {
    console.log(error);
  }
   
}


export default connect



