import React from "react";

export default function Location() {
  return (
    <a href="#" class=" shadow-2xl relative ">
      <div class="  h-full relative shadow-2xl shadow-purple-900 overflow-hidden group ">
        <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  ">
          <div class="w-full h-full   p-5   relative">
            <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
              <h2 class="text-2xl font-bold  text-white mb-0 pb-1">
                Standard Color
              </h2>
              <p class="text-lg font-light text-white">
                Lorem ipsum dolor sit amet, #brands.
              </p>
            </div>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/random/400x400"
          class="w-full z-0  h-full    object-fill example "
        />
      </div>
    </a>
  );
}
