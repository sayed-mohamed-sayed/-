import Head from "next/head";
import axios from "axios";
import domin from "../../../config";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Products from "../products/posts";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";

export default function Input() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [taxes, settaxes] = useState("");
  const [ads, setads] = useState("");
  const [discount, setdiscount] = useState("");
  const [count, setcount] = useState("");
  const [catergoy, setcatergoy] = useState("");

  const router = useRouter();
  // const total = () => {
  //   const sum =
  //     parseInt(price) + parseInt(taxes) + parseInt(ads) - parseInt(discount);

  //   setcount(sum);
  // };

  const total = () => {
    const parsedPrice = parseInt(price);
    const parsedTaxes = parseInt(taxes);
    const parsedAds = parseInt(ads);
    const parsedDiscount = parseInt(discount);
  
    const sum =
      (isNaN(parsedPrice) ? 0 : parsedPrice) +
      (isNaN(parsedTaxes) ? 0 : parsedTaxes) +
      (isNaN(parsedAds) ? 0 : parsedAds) -
      (isNaN(parsedDiscount) ? 0 : parsedDiscount);
  
    setcount(sum);
  };
  
// useEffect(() => {
//     total();
//   }, [price, taxes, ads, discount]);

  async function addpost(e) {
    e.preventDefault();
    const post = {
      title,
      price,
      taxes,
      ads,
      discount,
      count,
      catergoy,
    };
    try {
      await axios.post(`/api/contasting`, post);
      router.push("/products/posts");
    } catch (error) {
      console.log(error);
    }
  }

  const { data: session } = useSession();

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
              <p>{session.user.name}</p>
            </div>
            <div className="inputs">
              <form method="post">
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

                  <small id="totall">&nbsp; :{count ? count : "00"}</small>
                </div>
                <input
                  type="number"
                  name="count"
                  id="count"
                  value={count}
                  onChange={(e) => setcount(totall)}
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

                <input
                  onClick={addpost}
                  type="submit"
                  style={{ cursor: "pointer" }}
                  value="SaveData"
                />
              </form>
              <div>
                <Link href="/products/posts">menue</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
