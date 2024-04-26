import React, { useState, useEffect } from "react";
import "../css/slider.css"; // Import your CSS file here
import ShowCategoryDiv from "./components/home/ShowCategoryDiv";
import axios from "axios";
import Location from "./components/home/Location";
import CakeDiv from "./components/home/CakeDiv";

export default function Home() {
  const title = "iCakes";
  const baseUrl = window.location.origin;
  const [dessertCategory, setDessertCategory] = useState([]);
  const [cakeCategory, setCakeCategory] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [cakes, setCakes] = useState([]);
  // Define your slides in an array
  const slides = [
    {
      imgSrc: "./2023-02-10.jpg",
      topic: "Nut-Free and Lactose-Free",
      description:
        "All cakes are nut-free, lactose-free, and halal. We offer eggless options as well.",
      buttonLabel: "LEARN MORE",
    },
    {
      imgSrc: "./fash-3-tier-white-wedding-cake-with-flowers_u6u31p.avif",
      topic: "Wedding Cakes on Sale!",
      description:
        "Celebrate our 60th anniversary with our biggest wedding cake sale!",
      buttonLabel: "Order Now",
    },
    {
      imgSrc: "./98a1458807c7cd3d248a01a1ca5b076c.jpg",
      topic: "Free Cake Sampling",
      description:
        "Are you looking for free cake sampling and consultation for your wedding? Please book an appointment now!",
      buttonLabel: "Appointment",
    },
    {
      imgSrc:
        "./pngtree-city-map-gps-navigation-with-location-pin-markers-picture-image_1953527.jpg",
      topic: "Location's",
      description:
        "Select the button below to find your nearest pick-up location! Grab N Go/readymade cakes are also available at nearly every location.",
      buttonLabel: "Locations",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentSlideIndex]); // Re-run effect when currentSlideIndex changes

  useEffect(() => {
    document.title = title;

    const getdessertCategory = async () => {
      const data = await axios.get(
        "http://localhost:3000/api/v1/cakes/subcategory",
        {
          params: {
            matchData: "cake",
          },
        }
      );
      setDessertCategory(data.data);
    };

    const getCakeCategory = async () => {
      const data = await axios.get(
        "http://localhost:3000/api/v1/cakes/subcategory",
        {
          params: {
            matchData: "cupcakes",
          },
        }
      );
      setCakeCategory(data.data);
    };

    const getCakes = async () => {
      const data = await axios.get("http://localhost:3000/api/v1/cakes/cake");
      setCakes(data.data);
    };

    getCakes();

    getCakeCategory();
    getdessertCategory();
  }, []);

  return (
    <>
      <div className="carousel">
        <div className="list">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`item ${index === currentSlideIndex ? "active" : ""}`}
            >
              <img src={slide.imgSrc} alt={`Slide ${index + 1}`} />
              <div className="content">
                <span className="topic">{slide.topic}</span>
                <div className="des text-2xl">{slide.description}</div>
                <div className="buttons">
                  <button onClick={handleNext}>LEARN MORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnail Section */}
        <div className="thumbnail">
          {slides.map((slide, index) => (
            <div key={index} className="item">
              <img src={slide.imgSrc} alt={`Thumbnail ${index + 1}`} />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="arrows hidden">
          <button id="prev" onClick={handlePrev}>
            ⬅️
          </button>
          <button id="next" onClick={handleNext}>
            ➡️
          </button>
        </div>
        <div className="time"></div>
      </div>
      <ShowCategoryDiv title="cakes" category={cakeCategory} />
      <ShowCategoryDiv title="Desserts" category={dessertCategory} />
      <div class="container my-5 m-auto text-gray-600">
        <h1
          class="bold"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          The Irresistible World Of Cakes
        </h1>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Welcome to Irresistible Cakes, where our unique flavours, captivating
          designs, and exquisite craftsmanship unite to create an experience
          like no other. Crafted from a fusion of flour, sugar, eggs, butter or
          oil, and leavening agents such as baking powder and baking soda, our
          cakes are more than just confections; they are a symphony of taste, a
          visual delight, and a celebration in every slice. Whether you are
          having a birthday, a wedding, an anniversary, or simply a sweet treat,
          Irresistible Cakes is the answer.
        </p>
        <h3
          class="bold"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Explore the Classics
        </h3>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <span class="bold">Sponge Cake:</span> Our light and airy sponge cake,
          renowned for its irresistibly fluffy texture. Meticulously crafted by
          beating eggs, sugar, and flour together, creating a light, cloud-like
          batter that envelops your senses. Elevate the taste and texture of
          these sponge cakes by layering them with fillings of fruit, cream, or
          frosting.
        </p>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <span class="bold">Chocolate Cake:</span> Embraced by chocolate
          enthusiasts far and wide, our chocolate cake stands as a cherished
          favourite. This cake showcases a richness that indulges the senses,
          with its moist, luxurious, and decadent texture. Made using either
          cocoa powder or melted chocolate, it unveils a deep, captivating
          chocolate flavour. The final touch of elegance is provided by frosting
          chocolate cakes with chocolate ganache or buttercream.
        </p>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <span class="bold">Vanilla Cake:</span> A classic yet timeless choice,
          our vanilla cakes captivate with their subtle but delightfully sweet
          flavour. Infused with vanilla extract, they serve as a versatile
          canvas, harmonizing effortlessly with an array of fillings and
          frostings. Paired with buttercream, fruit compote, or chocolate
          ganache, each slice is a testament to the art of refined taste.
        </p>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <span class="bold">Red Velvet Cake:</span> With its vibrant and visual
          allure, our red velvet cake boasts a subtle chocolate undertone with a
          hint of tanginess. Traditionally complemented by the richness of cream
          cheese frosting, it's renowned for its vivid crimson hue that adds an
          element of drama to any occasion.
        </p>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <span class="bold">Fruitcake:</span> Exhibiting a dense and rich
          texture, our fruitcakes are a celebration of flavours. Crafted using a
          medley of candied or dried fruits, nuts, and an assortment of spices,
          they encapsulate the essence of festive indulgence. Often associated
          with cherished occasions like Christmas and weddings, each slice tells
          a tale of tradition and jubilation.
        </p>
        <h3
          class="bold"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Beyond Taste, an Artful Expression
        </h3>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Cakes are more than just culinary delights; they offer a canvas for
          endless creativity, often adorned with frosting, fondant, edible
          flowers, sprinkles, and other decorative toppings. From the young to
          the young at heart, these beloved desserts delight individuals of all
          ages, standing as the centrepiece for countless celebrations and
          cherished moments.
        </p>
        <p
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Join us on a journey of flavour, texture, and artistry. At
          Irresistible Cakes, we invite you to immerse yourself in the
          irresistible world of cakes, where every slice is a celebration and
          every bite is pure delight.
        </p>
      </div>

      <section class="py-10 bg-w sm:py-16 lg:py-24  relative">
        <div class="container mx-auto">
          <h2 class="text-3xl font-light   text-black sm:text-4xl lg:text-5xl">
            <span class="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-500 lg:inline">
              Discover
            </span>
            the Charm of Our Location
          </h2>
          <p class="mb-20 text-lg text-gray-900 my-2">
            Explore a vibrant collection of shops and experiences
          </p>

          <CakeDiv cakes={cakes} />
          <div class="grid grid-cols-1 gap-6   lg:grid-cols-4 ">
            <Location />
            <Location />
            <Location />
            <Location />
            <Location />
            <Location />
            <Location />
            <Location />
            <Location />
            <Location />
          </div>
        </div>
      </section>
    </>
  );
}
