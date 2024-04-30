import React, { useEffect, useState } from "react";
import ProductQuickView from "./ProductQuickView";
import { useSelector, useDispatch } from "react-redux";
import { setQuickView } from "../../../store/slices/homeSlicer.js";
import { Link, Outlet } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

export default function CakeItem({
  cakename,
  discount,
  images,
  size,
  flavor,
  productId,
}) {
  const baseUrl = window.location.origin;
  const dispatch = useDispatch();

  const ProductQuickV = useSelector((state) => state.productQuickView);

  const imagesArr = images.map((e) => {
    const backend_Url = "http://localhost:3000/";
    const crop1 = backend_Url + e.substr(7);
    return crop1;
  });

  const productQuickViewDisplayhandler = function (e) {
    // dispatch(setQuickView(true));
  };

  return (
    <>
      {" "}
      <div
        key={productId}
        // onClick={productQuickViewDisplayhandler}
        class="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm "
        style={{ minHeight: "32rem" }}
      >
        <div class="relative">
          <Carousel
            loop={true}
            autoplay={true}
            transition={{ duration: 1 }}
            autoplayDelay={5000}
            className=""
          >
            {imagesArr.map((image) => (
              <img
                src={image}
                alt="image 1"
                className="h-full w-full object-cover"
                style={{ minHeight: "20rem", maxHeight: "20rem" }}
              />
            ))}
          </Carousel>
          {discount ? (
            <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div>
          ) : (
            ""
          )}
        </div>
        <Link to={"/quickView/" + productId}>
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">{cakename}</h3>
            <p class="text-gray-600 text-sm mb-4"></p>
            <div class="flex items-center justify-between">
              <span class="font-bold text-2xl ">
                From :{" "}
                <span className="text-red-500">
                  ${discount ? size[0].price - discount : size[0].price}{" "}
                </span>
                {discount ? (
                  <span class="font-bold text-lg text-gray-500 line-through">
                    ${size[0].price}
                  </span>
                ) : (
                  ""
                )}
              </span>
            </div>
            <button class="bg-blue-500 m-auto my-4 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}
