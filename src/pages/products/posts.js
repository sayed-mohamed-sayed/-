import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import domin from "../../../config";
import { useRouter } from "next/router";

export default function Postdata({ product }) {
  const router = useRouter();
  const [products ,setproducts]=useState(product)
  // try {
  //   await axios.post(`${domin}/utlin`,post)
  //   res.redirect("/cart");

  // } catch (error) {
  //   console.log(error)
  //   ;
  // }
  
  async function deletposts(post) {
    try {
      await axios.delete(`${domin}/productid/${post}`);
      const updatedProducts = products.filter((p) => p._id !== post);
      setproducts(updatedProducts);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Head>
        <title>sign in</title>
      </Head>

      <div className="input">
        <div className="bodd">
          <div className="curd">
            <div className="head">
              <h2>crud</h2>
              <p>product mangemnt susteem</p>
            </div>

            <div className="outputs">
              <div className="searchblock">
                <input type="text" id="search" placeholder="search" />
                <div className="btnsearch">
                  <button id="searchtitle">search by title</button>
                  <button id="searchcat">searchcat</button>
                </div>
              </div>
            </div>
            <div id="butendeleteall">
              <button>DELETE ALL </button>
            </div>
            <div className="lkj">
              {products ? (
                products.map((i, o) => (
                  // eslint-disable-next-line react/jsx-key
                  <div style={{border:"solid 1px white" ,margin:"3px"}} key={o}>
                    <table>
                      <tbody>
                        <tr>
                          <th>م</th>
                           <th>الاســــــم</th>
                          <th>السعر</th>
                          {/* <th>taxes</th> */}
                          {/* <th>ads</th> */}
                          <th>الخصـــــم</th>
                          <th>السعر النهائي</th>
                          {/* <th>count</th> */}
                          <th>تفاصيل</th>
                          <th>تعديل المنتج</th>
                          <th>مسح المنتج</th>
                        </tr>
                      </tbody>
                      <tbody id="tbody">
                        <tr>
                          <td>{o+1}</td>
                          <td>{i.title}</td>
                          <td>{i.price}</td>
                          {/* <td>{i.taxes}</td> */}

                          {/* <td>{i.ads}</td> */}
                          <td>{i.discount}</td>
                          <td>{i.count}</td>
                          {/* <td>{i.count}</td> */}
                          <td>{i.catergoy}</td>
                          <td>
                            <button
                              onClick={() => router.push(`/products/${i._id}`)}
                              id="update"
                            >
                              update
                            </button>
                          </td>
                          <td>
                            <button
                              id="delete"
                              onClick={() => deletposts(i._id)}
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))
                ) : (
                  <div>no Data</div>
                  )}
            </div>
                    <div style={{border:"solid 1px white" ,top:"-30px"  ,position:"relative",width:"50%" ,margin:"auto" ,cursor:"pointer" ,letterSpacing:"5px" ,fontWeight:"bold"}}>
                    <Link href="/products">Addproduct</Link>
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get(`${domin}/contasting`);
  return {
    props: {
      product: response.data,
    },
  };
}
