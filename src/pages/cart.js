// import Image from "next/image";
// import { Inter } from "next/font/google";
// import { useState } from "react";
// const inter = Inter({ subsets: ["latin"] });
// import axios from "axios";
// import domin from "../../onfig";


// export default function Cart({postdata}) {
//   return (
//     <div>
//       <h1>Cart</h1>
//     {
//       postdata&&postdata.map((i,o)=>(
//         // eslint-disable-next-line react/jsx-key
//         <div>
//           <table>
//     <tbody><tr>
//          <th>id</th>         <th>title</th>
//          <th>price</th>
//          <th>taxes</th>
//          <th>ads</th>
//          <th>dizzscount</th>
//          <th>totall</th>
//          <th>caeegry</th>
//          <th>update</th>
//          <th>delete</th>
//          </tr></tbody><tbody id="tbody"><tr>
//      <td>{o}</td>
//  <td>{i.title}</td>
//  <td>{i.taxes}</td>
//  <td>{i.ads}</td>
//  <td>{i.discount}</td>
//  <td>9</td>
//  <td>{i.count}</td>
//  <td>{i.category}</td>
//  <td><button onclick="update(0)" id="update">update</button></td>
//  <td><button onclick="deletedate(0)" id="delete">delete</button></td>
//    </tr></tbody>

//  </table>

//         </div>
//       ))
//     }
//     </div>
//   );
// }

// export  async function getStaticProps () {
  
//   const response= await axios.get(`${domin}/utlin`)
//     return{
//       props:{
//         postdata:response.data
//       }    
//     }
// }