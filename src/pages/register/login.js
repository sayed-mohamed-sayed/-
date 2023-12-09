



import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Regost() {

  const router=useRouter()

const [email ,setemail]=useState('')
const [password,setpassword]=useState('')

async function onSubmit(e) {
  e.preventDefault()
  const status =await signIn('credentials',{
    redirect:false,
    email :email,
    password:password ,
    callbackUrl:"/products"
  })
if (status.ok) router.push(status.url)

}


  return (
    <div>
        <Head>
            <title>lognIn</title>
        </Head>
    
<div className="input">
  <form  method="post">
    <input type="email" placeholder="email"  name="email" value={email} onChange={(e)=>setemail(e.target.value)} />
    <input type="password" placeholder="password"  name="password"  value={password} onChange={(e)=>setpassword(e.target.value)} />
    <button type="submit" onClick={onSubmit}>signin</button>
  </form>
   <div style={{display:"flex"}}>
<p> account</p>
<Link href="/" style={{color:"red" ,cursor:"pointer"}}>signin</Link>

</div>
    </div>


    </div>
  );
}

  