import Product from "../../../../productschema/schema"
import connect from "../../../../utlss/Connect";
connect()

// const handelr = nc().post(async(req,res)=>{

//     const{title,price,taxes,ads,discount,count, catergoy}=req.body

//     try {
//         const newpost=new Posts({title,price,taxes,ads,discount,count, catergoy})
//     await newpost.save()
//     res.status(200).json({status:"1 post sucess"})

//     } catch (error) {
//         res.status(400).json({status:"filed ///////////"})

//     }

// })

// export default handelr

// export default async function handles(req ,res) {
//     try {
//         const demo= await Posts.create(req.body)
//         res.redirect("/cart")
//         if (!demo) {
//             return res.json({"code":"///////////////////////"})
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({status:"////////////////////////////no"})
//     }
// }





export default async function Contact(req, res) {
  if (req.method === "GET") {
    try {
      const notes = await Product.find();
      res.send(notes);
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (req.method === "POST") {
      const { title, price, taxes, ads, discount, count, catergoy } = req.body;
       try {
      const newpost = new Product({
        title,
        price,
        taxes,
        ads,
        discount,
        count,
        catergoy,
      });

      await newpost.save();

      res.status(201).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
  else if (req.method === "POST") {
    const { title, price, taxes, ads, discount, count, catergoy } = req.body;
     try {
    const newpost = new Product({
      title,
      price,
      taxes,
      ads,
      discount,
      count,
      catergoy,
    });

    await newpost.save();

    res.status(201).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
}

// export default  async (req ,res)=>{
//     const {method}=req
// switch(method){
//     case "GET":
//         try {
//             const notes=await Posts.find({})
//             res.status(200).json({success:true ,data:notes})
//         } catch (error) {
//             res.status(400).json({success:false})
//         }
//         break;
//         case 'POST':
//             try {
//                const note=await Posts.create(req.body)
//                   res.redirect("/cart")

//                res.status(201).json({success:true })

//             } catch (error) {
//                 res.status(400).json({success:false})

//             }
//             break;
//             default:
//                 res.status(400).json({success:false})

// break
//             }

// }
