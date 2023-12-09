import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Nevpar from "./nevpar"
import Fotter from "./fotter";

const inter = Inter({ subsets: ["latin"] });

export default function Layout(props) {
  return (
    <div>
<Nevpar/>
{props.children}
{/* <Fotter/>     */}
    </div>
  );
}

  