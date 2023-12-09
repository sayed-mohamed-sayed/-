// import connectdb from "../../../../utlss/Connect";
// import User from "../../../../modelSign/schma"
// import { hash } from "bcryptjs";



// export default async function handelr(req,res) {
//     connectdb().catch(error=>res.json({error:"!!!!!!!!!!!"}))
//     if (req.method==="POST") {
//       if(!req.body) return res.status(404).json({error:"!!!!!!!!"})
//         const {name ,email ,password}=req.body
// const checkexicting=await User.findOne({email})
// if (checkexicting) return res.status(422).json({message:"!!!!!!"})

// User.create=({name ,email,password :await hash(password ,12)} ,function(err,data){
//     if (err) return res.status(404).json({err})
//     res.status(201).json({status:true ,user:data})
// })

//     }else{
//         res.status(500).json({message:"nnmnnnnnnnnnn"})
//     }
// }


import connectdb from "../../../../utlss/Connect";
import User from "../../../../modelSign/schma";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  try {
    await connectdb();
    if (req.method === "POST") {
      if (!req.body) return res.status(404).json({ error: "!!!!!!!!" });
      const { name, email, password } = req.body;
      const checkexicting = await User.findOne({ email });
      if (checkexicting) return res.status(422).json({ message: "!!!!!!" });

      const hashedPassword = await hash(password, 12);

      const user = await User.create({ name, email, password: hashedPassword });
      res.status(201).json({ status: true, user });
    } else {
      res.status(500).json({ message: "nnmnnnnnnnnnn" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
}