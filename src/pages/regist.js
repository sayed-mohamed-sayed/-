



import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Regost() {

const io=(e)=>{
  e.preventDefault()
}

  return (
    <div>
        <Head>
            <title>regist in</title>
        </Head>
      <h1>Signin</h1>
    
<div className="input">
  <form action="/api/reson" method="post">

  <input type="text" placeholder="name"  name="name" />

    <input type="email" placeholder="email"  name="email" />
    <input type="password" placeholder="password"  name="password"  />
    <input type="submit"  value="regist"/>
  </form>
    </div>
   <div style={{display:"flex"}}>
<p> account</p>
<Link href="./" style={{color:"red" ,cursor:"pointer"}}>signin</Link>

</div>


    </div>
  );
}

  