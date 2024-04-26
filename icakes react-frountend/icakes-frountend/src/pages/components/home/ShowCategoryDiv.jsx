import React from "react";

export default function ShowCategoryDiv({ title, category }) {
  return (
    <>
      <h1
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-once="true"
        class="text-5xl text-center font-bold my-5 "
        style={{
          fontFamily: "math",
          fontSize: " 72px",
          background: " -webkit-linear-gradient(88deg, #381953, #ff0202)",
          webkitBackgroundClip: "text",
          webkitTextFillColor: "transparent",
        }}
      >
        {title}
      </h1>

      <div
        class=" container m-auto text-center bg-grey-300 "
        data-aos=" fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div
          class="grid grid-cols-3  gap-4  text-center m-5 "
          style={{ gridAutoFlow: "row" }}
        >
          {category.map((item) => {
            return <button class="buttonDesign">{item.subcategory}</button>;
          })}
        </div>
      </div>
    </>
  );
}
