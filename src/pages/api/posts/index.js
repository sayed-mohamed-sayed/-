import Useemail from "../../../../wert/registschema";
import connect from "../../../../utlss/Connect";
connect();

export default async function handelr(req, res) {
    if (req.method === "POST") {
      const { title, name } = req.body;
      try {
        connect()
        const newpost = new Useemail({ title ,name });
        res.status(201).json({ success: true ,newpost });
        newpost.save()
    } catch (error) {
      console.log(error);
        res.status(400).json({ status: "no" });
      }
    }
  }

// export default async function handelr (req ,res){
//     try {
//      const user=await Useemail.create(req.body)
//      res.status(201).json({user})
//      if (!user) {
//          return res.json({"code":"///////////////////////"})
//      }
//     } catch (error) {
//      console.log(error);
//      res.status(400).json({status:"no/////////////////"})
//     }
//  }