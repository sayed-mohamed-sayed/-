import mongoose from "mongoose";


async function connect(){
  try {
    await mongoose.connect("mongodb+srv://sayedd:sayedd@cluster0.oggt8kh.mongodb.net/"
  
   
   )
    
  } catch (error) {
    console.log(error);
  }
   
}


export default connect







// import mongoose from "mongoose";

// const connection = {
//   isConnected: false,
// };

// async function connect() {
//   if (connection.isConnected) {
//     return;
//   }

//   try {
//     const db = await mongoose.connect("mongodb+srv://elsayed:elsayed@cluster0.f6aswaj.mongodb.net/", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     connection.isConnected = db.connections[0].readyState === 1;
//     console.log("Connected to MongoDB!");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// export default connect;