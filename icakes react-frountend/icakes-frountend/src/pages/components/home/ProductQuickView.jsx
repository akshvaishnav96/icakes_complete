import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

import { useDispatch } from "react-redux";

export default function ProductQuickView({ productId, cakename }) {
  const title = "Cake Quick View";

  const baseUrl = window.location.origin;
  const backend_Url = "http://localhost:3000";

  const [cakeData, setCakeData] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    document.title = title;

    const getCake = async () => {
      const cake = await axios.get("http://localhost:3000/api/v1/cakes/cake", {
        params: {
          id,
        },
      });
      setCakeData(cake.data);
    };

    getCake();
  }, []);

  const dispatch = useDispatch();

  const closeQuickView = function (e) {
    // e.prevantDefault();
    navigate(-1);
  };

  return (
    <>
      {cakeData.map((cake) => (
        <div class="relative z-10" role="dialog" aria-modal="true">
          <div
            class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"
            style={{
              background: `url(${backend_Url}/${cake.images[0].substr(7)})`,
            }}
          ></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    onClick={closeQuickView}
                    type="button"
                    class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                  >
                    <span class="sr-only">Close</span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      {/* <img
                        src={}
                        alt="Two each of gray, white, and black shirts arranged on table."
                        class="object-cover object-center"
                      /> */}

                      <Carousel
                        loop={true}
                        autoplay={true}
                        transition={{ duration: 1 }}
                        autoplayDelay={5000}
                        className="rounded-xl"
                      >
                        {cake.images.map((image) => (
                          <img
                            src={backend_Url + "/" + image.substr(7)}
                            alt="image 1"
                            className="h-full w-full object-cover"
                            style={{ minHeight: "30rem", maxHeight: "30rem" }}
                          />
                        ))}
                      </Carousel>
                    </div>
                    <div class="sm:col-span-8 lg:col-span-7">
                      <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">
                        {cake.name}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        class="mt-2"
                      >
                        <h3 id="information-heading" class="sr-only">
                          Product information
                        </h3>

                        <p class="text-2xl text-green-500">
                          <span className="text-2xl font-bold text-green-500">
                            Start From
                          </span>
                          :
                          {cake.discount ? (
                            <>
                              <span className="text-green-500 text-3xl">
                                ${cake.size[0].price - cake.discount}
                              </span>
                              <span className="text-red-500 mx-2 text-xl line-through">
                                ${cake.discount}
                              </span>
                            </>
                          ) : (
                            cake.size[0].price
                          )}
                        </p>
                        <h3>Available Flavors: {cake.flavor.length}</h3>

                        {/* <div class="mt-6">
                          <h4 class="sr-only">
                            Flavor Available : {cake.flavor.length}
                          </h4>
                          <div class="flex items-center">
                            <div class="flex items-center">
                              <svg
                                class="text-gray-900 h-5 w-5 flex-shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <svg
                                class="text-gray-900 h-5 w-5 flex-shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <svg
                                class="text-gray-900 h-5 w-5 flex-shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <svg
                                class="text-gray-900 h-5 w-5 flex-shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <svg
                                class="text-gray-200 h-5 w-5 flex-shrink-0"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>
                            <p class="sr-only">3.9 out of 5 stars</p>
                            <a
                              href="#"
                              class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              117 reviews
                            </a>
                          </div>
                        </div> */}
                      </section>

                      <section aria-labelledby="options-heading" class="mt-10">
                        <form>
                          <div>
                            <h4 class="text-sm font-medium text-gray-900">
                              <span className="text-purple-500">
                                Flavor's :
                              </span>
                            </h4>

                            <fieldset class="mt-4">
                              <legend class="sr-only">Choose a size</legend>
                              <div class="grid grid-cols-3 gap-4">
                                {cake.flavor.map((flavor) => (
                                  <>
                                    <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-purple-500 hover:text-white focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                      <input
                                        type="radio"
                                        name="size-choice"
                                        value={flavor._id}
                                        class="sr-only"
                                        aria-labelledby="size-choice-0-label"
                                      />
                                      <span id="size-choice-0-label">
                                        <div>{flavor.flavor.cakeFlavor}</div>
                                      </span>

                                      <span
                                        class="pointer-events-none absolute -inset-px rounded-md"
                                        aria-hidden="true"
                                      ></span>
                                    </label>
                                  </>
                                ))}
                              </div>
                            </fieldset>
                          </div>

                          <div class="mt-10">
                            <div class="flex items-center justify-between">
                              <h4 class="text-sm font-medium text-gray-900">
                                Size
                              </h4>
                            </div>

                            <fieldset class="mt-4">
                              <legend class="sr-only">Choose a size</legend>
                              <div class="grid grid-cols-2 gap-4">
                                {cake.size.map((item) => (
                                  <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                    <input
                                      type="radio"
                                      name="size-choice"
                                      value={item._id}
                                      class="sr-only"
                                      aria-labelledby="size-choice-0-label"
                                    />
                                    <span id="size-choice-0-label">
                                      <div>size: {item.size.cakesize}</div>
                                      <div>
                                        serving:
                                        {item.size.serving}
                                      </div>
                                      <div>tier:{item.tier.tier} </div>
                                      <div>
                                        {" "}
                                        price:
                                        {item.price}
                                      </div>
                                    </span>

                                    <span
                                      class="pointer-events-none absolute -inset-px rounded-md"
                                      aria-hidden="true"
                                    ></span>
                                  </label>
                                ))}

                                {/* <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                  <input
                                    type="radio"
                                    name="size-choice"
                                    value="XXS"
                                    class="sr-only"
                                    aria-labelledby="size-choice-0-label"
                                  />
                                  <span id="size-choice-0-label">XXS</span>

                                  <span
                                    class="pointer-events-none absolute -inset-px rounded-md"
                                    aria-hidden="true"
                                  ></span>
                                </label>
                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                  <input
                                    type="radio"
                                    name="size-choice"
                                    value="XS"
                                    class="sr-only"
                                    aria-labelledby="size-choice-1-label"
                                  />
                                  <span id="size-choice-1-label">XS</span>

                                  <span
                                    class="pointer-events-none absolute -inset-px rounded-md"
                                    aria-hidden="true"
                                  ></span>
                                </label>
                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                  <input
                                    type="radio"
                                    name="size-choice"
                                    value="S"
                                    class="sr-only"
                                    aria-labelledby="size-choice-2-label"
                                  />
                                  <span id="size-choice-2-label">S</span>

                                  <span
                                    class="pointer-events-none absolute -inset-px rounded-md"
                                    aria-hidden="true"
                                  ></span>
                                </label>
                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                  <input
                                    type="radio"
                                    name="size-choice"
                                    value="M"
                                    class="sr-only"
                                    aria-labelledby="size-choice-3-label"
                                  />
                                  <span id="size-choice-3-label">M</span>

                                  <span
                                    class="pointer-events-none absolute -inset-px rounded-md"
                                    aria-hidden="true"
                                  ></span>
                                </label>
                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                  <input
                                    type="radio"
                                    name="size-choice"
                                    value="L"
                                    class="sr-only"
                                    aria-labelledby="size-choice-4-label"
                                  />
                                  <span id="size-choice-4-label">L</span>

                                  <span
                                    class="pointer-events-none absolute -inset-px rounded-md"
                                    aria-hidden="true"
                                  ></span>
                                </label>
                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                  <input
                                    type="radio"
                                    name="size-choice"
                                    value="XL"
                                    class="sr-only"
                                    aria-labelledby="size-choice-5-label"
                                  />
                                  <span id="size-choice-5-label">XL</span>

                                  <span
                                    class="pointer-events-none absolute -inset-px rounded-md"
                                    aria-hidden="true"
                                  ></span>
                                </label>
                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                  <input
                                    type="radio"
                                    name="size-choice"
                                    value="XXL"
                                    class="sr-only"
                                    aria-labelledby="size-choice-6-label"
                                  />
                                  <span id="size-choice-6-label">XXL</span>

                                  <span
                                    class="pointer-events-none absolute -inset-px rounded-md"
                                    aria-hidden="true"
                                  ></span>
                                </label>

                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-not-allowed bg-gray-50 text-gray-200">
                                  <input
                                    type="radio"
                                    name="size-choice"
                                    value="XXXL"
                                    disabled
                                    class="sr-only"
                                    aria-labelledby="size-choice-7-label"
                                  />
                                  <span id="size-choice-7-label">XXXL</span>
                                  <span
                                    aria-hidden="true"
                                    class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1="0"
                                        y1="100"
                                        x2="100"
                                        y2="0"
                                        vector-effect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                </label> */}
                              </div>
                            </fieldset>
                          </div>

                          <button
                            type="submit"
                            class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Add to bag
                          </button>
                          <button
                            type="submit"
                            class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                          >
                            Show Product
                          </button>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
