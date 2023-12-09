import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

import nav from "../src/styles/navbar.module.css";

export default function Nevpar() {
  const { data: session } = useSession();

  return (
    <div>
      <nav className={nav.nevpar}>
        {session && session.user.name}
        {
          session?
        
        <button onClick={() => signOut()}>
          Sign out</button>
      :<div style={{textAlign:"center" ,width:"100%" ,letterSpacing:"10px" ,fontWeight:"bold"}}>HELLO</div>
        }
        </nav>
    </div>
  );
}
