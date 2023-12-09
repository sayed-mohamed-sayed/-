
import connect from "../../../utlss/Connect"
import User from "../../../model/schema"
connect()

export default async function handelr (req ,res){
   try {
    const user=await User.create(req.body)
    res.status(201).json({user})
    res.redirect("/")
    if (!user) {
        return res.json({"code":"///////////////////////"})
    }
   } catch (error) {
    console.log(error);
    res.status(400).json({status:"no/////////////////"})
   }
}

// import connect from "../../../utlss/Connect"
// import User from "../../../model/schema"
// connect()

// export default async function handler(req, res) {
//   try {
//     const options = { 
//       w: 1, 
//       wtimeout: 70000, // زمن الانتظار بالملي ثانية 
//       j: true 
//     };
//     const user = await User.create(req.body, options);
//     res.redirect("/");
//     if (!user) {
//         return res.json({"code":"///////////////////////"})
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({status:"no/////////////////"})
//   }
// }