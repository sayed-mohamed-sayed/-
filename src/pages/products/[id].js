import Head from "next/head";
import axios from "axios";
import domin from "../../../config";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Products from "../products/posts"
export default function Input({items}) {
  const [title, settitle] = useState(items.title);
  const [price, setprice] = useState(items.price);
  const [taxes, settaxes] = useState(items.taxes);
  const [ads, setads] = useState(items.ads);
  const [discount, setdiscount] = useState(items.discount);
  const [count, setcount] = useState(items.count);
  const [catergoy, setcatergoy] = useState(items.catergoy);
const router=useRouter()

const total=()=>{
  const sum = parseInt(price) + parseInt(taxes) + parseInt(ads) - parseInt(discount);

  setcount(sum)
}
const effecttotall= useEffect(()=>{
  total()
},[price, taxes, ads, discount])

  async function updateitem(e) {
    e.preventDefault()
    const item= {
      title,
      price,
      taxes,
      ads,
      discount,
      count,
      catergoy,
    };
    try {
        await axios.put(`/api/productid/${items._id}` ,item)
        alert("تــــــــــــــــم")
        router.push("/products/posts")
      
      
    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <div>
      <Head>
        <title>product</title>
      </Head>

      <div className="input-update">
        <div className="bodd">
          <div className="curd">
            <div className="head">
              <h2>crud</h2>
              <p>product mangemnt susteem</p>
            </div>
            <div className="inputs">

              <form  method="post">
                <input
                  id="title"
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  placeholder="title"
                />

                <div className="price">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e) => setprice(e.target.value)}
                    placeholder="price"
                  />

                  <input
                    type="number"
                    name="taxes"
                    id="taxes"
                    value={taxes}
                    onChange={(e) => settaxes(e.target.value)}
                    placeholder="taxes"
                  />

                  <input
                    type="number"
                    name="ads"
                    id="ads"
                    value={ads}
                    onChange={(e) => setads(e.target.value)}
                    placeholder="ads"
                  />

                  <input
                    type="number"
                    name="discount"
                    value={discount}
                    onChange={(e) => setdiscount(e.target.value)}
                    id="discount"
                    placeholder="discount"
                  />

                  <small id="totall">{count}</small>
                </div>
                <input
                  type="number"
                  name="count"
                  id="count"
                  value={count}
                  onChange={(e) => setcount(e.target.value)}
                  placeholder="count"
                />

                <input
                  type="text"
                  name="catergoy"
                  id="category"
                  value={catergoy}
                  onChange={(e) => setcatergoy(e.target.value)}
                  placeholder="category"
                />

              </form>
              <button onClick={updateitem}>updateitem</button>
            </div>
             </div>
        </div>
      </div>
    </div>
  );

  }


  export async function getServerSideProps(context)  {
    const dataid=await axios.get(`${domin}/productid/${context.query.id}`)
    return{
props:{
    items:dataid.data
}

    }
  }