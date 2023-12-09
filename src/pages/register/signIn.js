import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import domin from "../../../config";
import axios from "axios";

export default function Regost() {
  const [title, setemail] = useState("");
  const [name, setpassword] = useState("");

async function addpost (e){
    e.preventDefault();
    const post = {title,name}

    
  //   try {
  //     await axios.post(`${domin}/posts/` ,post)
  //      res.redirect("/posts/");

  // } catch (error) {
  //     console.log(error);
  // }
  };


  return (
    <div>
      <Head>
        <title>regist in</title>
      </Head>
      <h1>Signin</h1>

      <div className="input">
        <form action="/api/posts/"  method="post">
          <input
            type="text"
            placeholder="email"
            name="title"
            value={title}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            name="name"
            value={name}
            onChange={(e) => setpassword(e.target.value)}
          />
<button>addpost</button>
        </form>
      </div>
      <div style={{ display: "flex" }}>
        <p> account</p>
        <Link href="/login" style={{ color: "red", cursor: "pointer" }}>
          login
        </Link>
      </div>
    </div>
  );
}
