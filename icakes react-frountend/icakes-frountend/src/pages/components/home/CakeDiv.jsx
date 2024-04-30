import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import LoaderComp from "../LoaderComp";

import CakeItem from "./CakeItem";

export default function CakeDiv({ cakes }) {
  // let [cakes, setCakes] = useState([]);

  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const getCakes = async () => {
  //     try {
  //       const data = await axios.get("http://localhost:3000/api/v1/cakes/cake");
  //       setCakes(data.data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getCakes();
  // }, []);

  return (
    <>
      <div class="container m-auto my-5 mt-16">
        <h3 class="text-gray-600 text-2xl font-medium">Fashions</h3>
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {loading ? (
            <LoaderComp height={"30rem"} width={"20rem"} repeat={8} />
          ) : (
            cakes.map((cake) => (
              <CakeItem
                cakename={cake.name}
                discount={cake.discount}
                images={cake.images}
                size={cake.size}
                Discount={cake.discount}
                flavor={cake.flavor}
                productId={cake._id}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
