import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import CakeItem from "./CakeItem";

export default function CakeDiv() {
  const [cakes, setCakes] = useState([]);
  useEffect(() => {
    const getCakes = async () => {
      const data = await axios.get("http://localhost:3000/api/v1/cakes/cake");
      setCakes(data.data);
    };

    getCakes();
  }, []);

  return (
    <>
      <div class="container m-auto my-5 mt-16">
        <h3 class="text-gray-600 text-2xl font-medium">Fashions</h3>
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {cakes.map((cake) => (
            <CakeItem
              cakename={cake.name}
              discount={cake.discount}
              images={cake.images}
              size={cake.size}
              Discount={cake.discount}
              flavor={cake.flavor}
              productId={cake._id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
