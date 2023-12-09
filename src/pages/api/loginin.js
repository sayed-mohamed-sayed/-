
import connect from "../../../utlss/Connect"
import User from "../../../model/schema"
connect()


// export default async function handelr (req ,res){
   
//     const {email ,password,name}=req.body
//     const user=await User.findOne({email,password,name})
//     if (!user) {
//         return res.json({"code":"///////////////////////"})
//     }else{
//         const { name, email,password } = user
//         console.log("الاسم: " + name)
//         console.log("البريد الإلكتروني: " + email)        
//               return res.json({ name, email })
//     }
   
// }

export default async function handler(req, res) {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email, password })

    if (!user) {
      res.redirect("/regist")
    } else {
      const { name, email } = user
      console.log(name ,email);
      res.redirect("/products")
      return res.json({ name, email })
    }
  } catch (error) {
    console.error(error)
    res.json({ error: "An error occurred" })
  }
  

}






















// import connect from "../../../utlss/Connect"
// import User from "../../../model/schema"

// connect()

// export default async function handler(req, res) {
//   const { email, password } = req.body

//   try {
//     const user = await User.findOne({ email, password,name })

//     if (!user) {
//       return res.json({ code: "///////////////////////" })
//     } else {
//       const { name, email } = user
//       return res.json({ name, email })
//     }
//   } catch (error) {
//     console.error(error)
//     res.json({ error: "An error occurred" })
//   }
// }