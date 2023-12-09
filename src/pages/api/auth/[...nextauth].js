import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import User from "../../../../modelSign/schma";
import connect from "../../../../utlss/Connect";
import GoogleProvider from 'next-auth/providers/google'

connect();

export default NextAuth({
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

        CredentialsProvider({
       name:"Credentials" ,
      async authorize(credentials ,req){
        connect()
const result= await User.findOne({email:credentials.email})
 if (!result) {
  throw new Error("No result")
 } 

 const checkpassword=await compare(credentials.password,result.password)
  
 if (!checkpassword ||result.email!==credentials.email) {
  throw new Error("No result")
 } 

 return result
      }
       
      })
    
  ],
  
  secret:"JqfzNzJ50uhNbQxlQ6QMbZxK5rCVO4ze3bIQwmY+d2E="
  
});