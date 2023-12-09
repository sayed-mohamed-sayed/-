import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Signin() {
const router=useRouter()


const [name ,setname]=useState('')
const [email ,setemail]=useState('')
const [password,setpassword]=useState('')


  const uu=(e)=>{
  e.preventDefault()
}

const signingoogle=(e)=>{
  e.preventDefault()
  signIn('google' ,{callbackUrl:"http://localhost:3000/products"})
}

async function signinemail(e) {
  e.preventDefault()
  const users={
    name,
    email,
    password
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  };
  
   await fetch("http://localhost:3000/api/auth/signup", options)
.then(res=>res.json())
.then((data)=>{
  if(data)router.push("http://localhost:3000/register/login")
})

  }



  return (
    <div>
        <Head>
            <title>sign in</title>
        </Head>
    <div style={{color:"white" ,background:"cadetblue" ,fontSize:"30px" ,padding:"5px" ,fontWeight:"bolder"}}>

    </div>
<div className="input">
  <form  method="post" >
  <input type="text" placeholder="name" name="name"    onChange={(e)=>setname(e.target.value)}  />
  <input type="email" placeholder="email" name="email" onChange={(e)=>setemail(e.target.value)}  />
    <input type="password" placeholder="password"      onChange={(e)=>setpassword(e.target.value)}  name="password"/>
<div>
<button style={{background:"black" ,color:"white" ,borderRadius:"10px" ,width:"90%"}} onClick={signinemail}> click</button>

</div>
<div style={{display:"flex" ,textAlign:"center",justifyContent:"center"}}>
<p>no account</p>
<div>

<button  style={{color:"red" ,cursor:"pointer" ,width:"300px"}} onClick={signingoogle}>signin with google</button>
</div>
<Link href="/register/login" style={{color:"red" ,cursor:"pointer"}}>register</Link>

</div>
  </form>
    
    </div>

    </div>
  );
}

  