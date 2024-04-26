import React, { useState, useEffect } from "react";
import "../../js/nav.js";
import "../../css/nav.css";
import { NavLink, Link } from "react-router-dom";
import LoaderComp from "../components/LoaderComp.jsx";
import MultipleSelect from "../components/MultipleSelect.jsx";

export default function Header() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div class="  shortHeader info-toolbar_info-toolbar__3_tc- d-header_align-items__1dvDD desktop-layout_scroll-bar__48fev nav_background">
        <p style={{ width: "100%" }} class="p-2">
          Irresistible Cakes , Since 1962 .... "Taste the Difference" NUT FREE |
          LACTOSE FREE
        </p>
        <div class="info-toolbar_base-container__1_dLo info-toolbar_container__2uPgr">
          <div class="mx-3 drop-down_dropdown-container__2P4m1 ">
            <div class="drop-down_info-toolbar-dropdown-placeholder__3cy6j">
              <span class="currency-dropdown_light-text__3YwkL">
                Login <span class="info-toolbar_divider__3smU5">|</span>
              </span>
            </div>
            <div class="drop-down_info-toolbar-dropdown-placeholder__3cy6j">
              <span class="currency-dropdown_light-text__3YwkL">Sign Up</span>
            </div>
          </div>
          <span class="info-toolbar_divider__3smU5">|</span>
          <a
            class="mx-2 info-toolbar_info-NavLinks__A38Rx info-toolbar_info-sub-NavLinks__1Z5SM info-toolbar_black__2-sgS d-header_align-items__1dvDD"
            href="/info/franchise-programme?promo=franchise_enquiry"
          >
            Location
          </a>
          <span class="info-toolbar_divider__3smU5">|</span>
          <a
            class="mx-2 info-toolbar_info-NavLinks__A38Rx info-toolbar_info-sub-NavLinks__1Z5SM info-toolbar_black__2-sgS d-header_align-items__1dvDD"
            href="https://www.fnp.com/corporate?promo=corporate_enquiry"
          >
            Appointment{" "}
          </a>
          <span class="info-toolbar_divider__3smU5">|</span>
        </div>
      </div>

      <nav class="md:flex lg:items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b  lg:min-h-[75px] max-lg:min-h-[60px] nav_background nav_background3">
        <a href="javascript:void(0)" class="max-sm:w-full max-sm:mb-3 shrink-0">
          <img src="./output-onlinegiftools.gif" alt="logo" class="w-[170px]" />
        </a>
        <div class="flex flex-wrap w-full items-center">
          {/* <input
            type="text"
            placeholder="Search something..."
            class="xl:w-96 max-lg:w-full lg:ml-8 max-md:mt-4 max-lg:ml-4 bg-gray-100 px-6 rounded h-10 outline-[#333] text-sm navSearch"
          /> */}
          <form action="">
            <div class="relative text-gray-600 mx-5">
              <input
                type="search"
                name="navserch"
                placeholder="Search"
                class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none navSearch"
              />
              <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                <svg
                  class="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xml:space="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </form>
          <div class="ml-auto max-lg:mt-4">
            <ul class="flex items-center">
              <li class="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] hover:text-[#007bff] hover:fill-[#007bff] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  class="mr-2"
                  viewBox="0 0 24 24"
                >
                  <g data-name="Layer 2">
                    <path
                      d="M14.5 12.75A3.22 3.22 0 0 1 12 11.6a3.27 3.27 0 0 1-2.5 1.15A3.22 3.22 0 0 1 7 11.6a2.91 2.91 0 0 1-.3.31 3.22 3.22 0 0 1-2.51.82 3.35 3.35 0 0 1-2.94-3.37v-.71a4.76 4.76 0 0 1 .24-1.5l1.57-4.7a1.75 1.75 0 0 1 1.66-1.2h14.56a1.75 1.75 0 0 1 1.66 1.2l1.57 4.7a4.76 4.76 0 0 1 .24 1.5v.71a3.35 3.35 0 0 1-2.92 3.37 3.2 3.2 0 0 1-2.51-.82c-.11-.1-.22-.22-.32-.33a3.28 3.28 0 0 1-2.5 1.17zm-9.78-10a.26.26 0 0 0-.24.17l-1.56 4.7a3.27 3.27 0 0 0-.17 1v.71a1.84 1.84 0 0 0 1.57 1.88A1.75 1.75 0 0 0 6.25 9.5a.75.75 0 0 1 1.5 0 1.67 1.67 0 0 0 1.75 1.75 1.76 1.76 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.67 1.67 0 0 0 1.75 1.75 1.76 1.76 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.75 1.75 0 0 0 1.93 1.74 1.84 1.84 0 0 0 1.57-1.88v-.71a3.27 3.27 0 0 0-.17-1l-1.56-4.7a.26.26 0 0 0-.24-.17z"
                      data-original="#000000"
                    />
                    <path
                      d="M20 22.75H4A1.76 1.76 0 0 1 2.25 21v-9.52a.75.75 0 0 1 1.5 0V21a.25.25 0 0 0 .25.25h16a.25.25 0 0 0 .25-.25v-9.53a.75.75 0 1 1 1.5 0V21A1.76 1.76 0 0 1 20 22.75z"
                      data-original="#000000"
                    />
                    <path
                      d="M15.5 22.75h-7a.76.76 0 0 1-.75-.75v-5a1.76 1.76 0 0 1 1.75-1.75h5A1.76 1.76 0 0 1 16.25 17v5a.76.76 0 0 1-.75.75zm-6.25-1.5h5.5V17a.25.25 0 0 0-.25-.25h-5a.25.25 0 0 0-.25.25z"
                      data-original="#000000"
                    />
                  </g>
                </svg>
                Stores and Services
              </li>
              <li class="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-[#333] hover:text-[#007bff] hover:fill-[#007bff] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  class="mr-2"
                  viewBox="0 0 512 511"
                >
                  <path
                    d="M497 193.3h-40.168c-1.215 0-2.418.052-3.613.13-9.024-8.051-19.004-14.7-29.68-19.82 24.348-17.294 40.262-45.712 40.262-77.778C463.8 43.266 421.035.5 368.469.5c-52.57 0-95.336 42.766-95.336 95.332 0 25.262 9.883 48.258 25.976 65.332h-70.148c16.094-17.074 25.973-40.07 25.973-65.332C254.934 43.266 212.168.5 159.602.5c-52.567 0-95.336 42.766-95.336 95.332 0 29.48 13.453 55.875 34.539 73.379-14.602 5.457-28.149 13.617-40.028 24.219a55.211 55.211 0 0 0-3.609-.13H15c-8.285 0-15 6.716-15 15v80.333c0 8.285 6.715 15 15 15h1.066v113.535c0 8.281 6.715 15 15 15h449.868c8.285 0 15-6.719 15-15V303.633H497c8.285 0 15-6.715 15-15V208.3c0-8.285-6.715-15-15-15zm-15 80.333h-25.168c-13.875 0-25.168-11.29-25.168-25.168 0-13.875 11.293-25.164 25.168-25.164H482zM303.133 95.832c0-36.023 29.308-65.332 65.332-65.332 36.023 0 65.336 29.309 65.336 65.332 0 36.027-29.309 65.332-65.332 65.332-36.028 0-65.336-29.305-65.336-65.332zM159.602 30.5c36.023 0 65.332 29.309 65.332 65.332 0 36.023-29.309 65.332-65.332 65.332-36.028 0-65.336-29.305-65.336-65.332 0-36.023 29.308-65.332 65.336-65.332zM30 223.3h25.168c13.875 0 25.168 11.29 25.168 25.169 0 13.875-11.293 25.164-25.168 25.164H30zm16.066 80.333h9.102c30.418 0 55.168-24.746 55.168-55.168 0-16.844-7.602-31.942-19.54-42.067h.356c15.504-9.918 33.535-15.23 52.383-15.23h142.887C258.664 214.566 241 249.574 241 288.633v113.535H110.332v-65.336c0-8.281-6.715-15-15-15-8.281 0-15 6.719-15 15v65.332H46.066zm419.868 98.531h-34.27v-65.332c0-8.281-6.715-15-15-15-8.281 0-15 6.719-15 15v65.332H271V288.633c0-53.742 43.723-97.465 97.469-97.465 18.933 0 37.039 5.36 52.582 15.36-11.852 10.128-19.383 25.163-19.383 41.94 0 30.419 24.746 55.165 55.168 55.165h9.098zm0 0"
                    data-original="#000000"
                  />
                </svg>
                Communty
              </li>
              <li class="flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  class="mr-2"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  />
                </svg>
              </li>
              <li class="flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff] cursor-pointer">
                <button class="px-4 py-1.5 text-sm rounded-sm font-medium text-white border-2 border-[#333] bg-[#333] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#333]">
                  Sign In
                </button>
              </li>
              <li id="toggle" class="lg:hidden">
                <button>
                  <svg
                    class="w-7 h-7"
                    fill="#333"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        id="collapseMenu"
        class="z-50 flex flex-wrap items-center px-10 py-3 bg-[#333] relative min-h-[46px] max-lg:hidden nav_background nav_background2"
      >
        <ul class="flex justify-center lg:space-x-4 max-lg:space-y-3 w-full max-lg:block">
          <li class="max-lg:border-b max-lg:py-2 px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-bold italic "
                  : "text-white text-[15px] font-medium block"
              }
            >
              Home
            </NavLink>
          </li>
          <li class="max-lg:border-b max-lg:py-2 px-3">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-bold italic "
                  : "text-white text-[15px] font-medium block"
              }
            >
              About Us
            </NavLink>
          </li>
          <li class="max-lg:border-b max-lg:py-2 px-3">Cake ↓ </li>
          <li class="max-lg:border-b max-lg:py-2 px-3">Desserts ↓</li>
          <li class="max-lg:border-b max-lg:py-2 px-3">
            <NavLink
              to="/quality"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-bold italic "
                  : "text-white text-[15px] font-medium block"
              }
            >
              Quality
            </NavLink>
          </li>
          <li class="max-lg:border-b max-lg:py-2 px-3">
            <NavLink
              to="/flavours"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-bold italic "
                  : "text-white text-[15px] font-medium block"
              }
            >
              Flavour's
            </NavLink>
          </li>
          <li class="max-lg:border-b max-lg:py-2 px-3">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-bold italic "
                  : "text-white text-[15px] font-medium block"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li class="max-lg:border-b max-lg:py-2 px-3">
            <NavLink
              to="/city"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-bold italic "
                  : "text-white text-[15px] font-medium block"
              }
            >
              City
            </NavLink>
          </li>
          <li class="max-lg:border-b max-lg:py-2 px-3">
            <NavLink
              to="/top-deals"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-bold italic "
                  : "text-white text-[15px] font-medium block"
              }
            >
              Top Deals
            </NavLink>
          </li>
        </ul>
        <div
          class="container m-auto text-center bg-grey-300 navDropDrop absolute top-10 left-20 bg-gray-200 hidden"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-once="true"
          style={{ width: "45rem", top: "3rem;" }}
        >
          <div
            class="grid grid-cols-3  gap-4 text-center m-5 "
            style={{ gridAutoFlow: "row" }}
          >
            <button class="buttonDesign">hello</button>
            <button class="buttonDesign">hello</button>
            <button class="buttonDesign">hello</button>
            <button class="buttonDesign">hello</button>
            <button class="buttonDesign">hello</button>
            <button class="buttonDesign">hello</button>
            <button class="buttonDesign">hello</button>
            <button class="buttonDesign">hello</button>
            <button class="buttonDesign">hello</button>
            <button class="buttonDesign">hello</button>
            <button class="buttonDesign">hello</button>
          </div>
        </div>
      </div>
    </>
  );
}
