import React, { useState } from "react";
import ProductBanner from "./ProductBanner";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import CakeItem from "../home/CakeItem";

export default function CategoryFilter() {
  const [sortDropdown, SetSortDropdown] = useState(false);
  const [filterSideBar, setFilterSideBar] = useState(false);
  const [size, setSize] = useState([]);
  const [flavor, setFlavor] = useState([]);
  const [category, setCategory] = useState([]);
  const [tier, setTier] = useState([]);
  const [categoryDropdown, setCategoryDropDown] = useState(false);
  const [sizeDropdown, setSizeDropDown] = useState(false);
  const [tierDropdown, setTierDropDown] = useState(false);
  const [colorDropdown, setColorDropDown] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [useFilterData, setUserFilterData] = useState([]);
  const [cakes, setCakes] = useState([]);

  const [flavorArr, setFlavorArr] = useState([]);
  const [categoryArr, setCategoryArr] = useState([]);
  const [sizeArr, setSizeArr] = useState([]);
  const [tierArr, setTierArr] = useState([]);
  const [sort, setSort] = useState({});

  const sortDropdownFunc = () => {
    SetSortDropdown((prev) => {
      return !prev;
    });
  };

  const filterSideBarController = () => {
    setFilterSideBar((prev) => {
      return !prev;
    });
  };

  const closeSideFilter = () => {
    setFilterSideBar(false);
  };

  const categoryDropddownHandler = (e) => {
    setCategoryDropDown((prev) => !prev);
  };

  const sizeDropdownHandler = (e) => {
    setSizeDropDown((prev) => !prev);
  };

  const tierDropdownHandler = (e) => {
    setTierDropDown((prev) => !prev);
  };

  const colorDropdownHandler = (e) => {
    setColorDropDown((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/cakes/cake/get_distinct_field_value"
        );
        setTier(response.data.tiers);
        setSize(response.data.sizes);
        setFlavor(response.data.flavors);
        setCategory(response.data.categories);

        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async (categoryArr, colorArr, sizeArr) => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/cakes/cake/filterdata",
          {
            params: {
              flavor: colorArr.length > 0 ? flavorArr : undefined,
              categorys: categoryArr.length > 0 ? categoryArr : undefined,
              sizes: sizeArr.length > 0 ? sizeArr : undefined,
              tiers: tierArr.length > 0 ? tierArr : undefined,
              sort: sort ? sort : undefined,
              limit: 10,
            },
          }
        );
        setUserFilterData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Assuming you have categoryArr, colorArr, and sizeArr variables defined somewhere above
    fetchData(categoryArr, flavorArr, sizeArr, tierArr);
  }, [categoryArr, flavorArr, sizeArr, tierArr, sort]);

  const flavorFilter = (flavor, isChecked) => {
    if (isChecked) {
      setFlavorArr((pre) => {
        return [...pre, flavor];
      });
    } else {
      setFlavorArr(
        flavorArr.filter((selectedFlavor) => selectedFlavor !== flavor)
      );
    }
  };

  const categoryFilter = (category, isChecked) => {
    if (isChecked) {
      setCategoryArr((pre) => {
        return [...pre, category];
      });
    } else {
      setCategoryArr(
        categoryArr.filter((selectedCategory) => selectedCategory !== category)
      );
    }
  };

  const sizeFilter = (size, isChecked) => {
    if (isChecked) {
      setSizeArr((pre) => {
        return [...pre, size];
      });
    } else {
      setSizeArr(sizeArr.filter((selectedSize) => selectedSize !== size));
    }
  };

  const tierFilter = (tier, isChecked) => {
    if (isChecked) {
      setTierArr((pre) => {
        return [...pre, size];
      });
    } else {
      setTierArr(tierArr.filter((selectedTier) => selectedTier !== tier));
    }
  };

  const nameA_Z_filter = (e) => {
    e.preventDefault();

    setSort({ productName: 1 });
  };

  const nameZ_A_filter = (e) => {
    e.preventDefault();

    setSort({ productName: -1 });
  };

  const removefilter = (e) => {
    e.preventDefault();

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    const checkedCheckboxes = Array.from(checkboxes).filter(
      (checkbox) => checkbox.checked
    );

    checkedCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    setSort();
  };

  const priceHighToLow = (e) => {
    e.preventDefault();

    setSort({ price: -1 });
  };

  const priceLowToHigh = (e) => {
    e.preventDefault();

    setSort({ price: 1 });
  };

  useEffect(() => {
    const fetchData = async (sort) => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/cakes/cake"
        );

        setCakes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(sort);
  }, []);

  console.log(size, tier);

  return (
    <>
      <div className="bg-white">
        <div>
          <div
            className={`relative z-40 lg:hidden ${
              filterSideBar ? "" : "hidden"
            }`}
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>

            <div className="fixed inset-0 z-40 flex">
              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    onChange={closeSideFilter}
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="px-2 py-3 font-medium text-gray-900"
                  >
                    <li>
                      <Link to="#" className="block px-2 py-3">
                        Totes
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-2 py-3">
                        Backpacks
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-2 py-3">
                        Travel Bags
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-2 py-3">
                        Hip Bags
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="block px-2 py-3">
                        Laptop Sleeves
                      </Link>
                    </li>
                  </ul>

                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        onClick={colorDropdownHandler}
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-0"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Category's
                        </span>
                        <span className="ml-6 flex items-center">
                          <svg
                            className="h-5 w-5"
                            style={{
                              transition: "0.5s all",
                              transform: `${
                                colorDropdown ? "rotate(135deg)" : ""
                              }`,
                            }}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      className={`pt-6 ${colorDropdown ? "" : "hidden"} `}
                      id="filter-section-mobile-0"
                    >
                      <div className="space-y-6">
                        {category.map((category) => {
                          return (
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-color-0"
                                onClick={(e) =>
                                  categoryFilter(category._id, e.target.checked)
                                }
                                name="color"
                                value={category._id}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                for="filter-mobile-color-0"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {category.subcategory}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <button
                        onClick={categoryDropddownHandler}
                        type="button"
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-1"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Flavor's
                        </span>
                        <span className="ml-6 flex items-center">
                          <svg
                            className="h-5 w-5"
                            style={{
                              transition: "0.5s all",
                              transform: `${
                                categoryDropdown ? "rotate(135deg)" : ""
                              }`,
                            }}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      className={`pt-6 ${categoryDropdown ? "" : "hidden"} `}
                      id="filter-section-mobile-1"
                    >
                      <div className="space-y-6">
                        {flavor.map((flavor) => {
                          return (
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-category-0"
                                name="flavor"
                                onClick={(e) =>
                                  categoryFilter(flavor._id, e.target.checked)
                                }
                                value={flavor._id}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                for="filter-mobile-category-0"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {flavor.cakeFlavor}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        onClick={sizeDropdownHandler}
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-2"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">Size</span>
                        <span className="ml-6 flex items-center">
                          <svg
                            style={{
                              transition: "0.5s all",
                              transform: `${
                                sizeDropdown ? "rotate(135deg)" : ""
                              }`,
                            }}
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      className={`pt-6 ${sizeDropdown ? "" : "hidden"} `}
                      id="filter-section-mobile-2"
                    >
                      <div className="space-y-6">
                        {size.map((size) => {
                          return (
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-size-0"
                                name="size"
                                onClick={(e) =>
                                  sizeFilter(size._id, e.target.checked)
                                }
                                value={size._id}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                for="filter-mobile-size-0"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {size.cakesize}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <button
                        type="button"
                        onClick={tierDropdownHandler}
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-mobile-2"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Tier's
                        </span>
                        <span className="ml-6 flex items-center">
                          <svg
                            style={{
                              transition: "0.5s all",
                              transform: `${
                                tierDropdown ? "rotate(135deg)" : ""
                              }`,
                            }}
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      className={`pt-6 ${tierDropdown ? "" : "hidden"} `}
                      id="filter-section-mobile-2"
                    >
                      <div className="space-y-6">
                        {tier.map((tier) => {
                          return (
                            <div className="flex items-center">
                              <input
                                id="filter-mobile-size-0"
                                name="tier"
                                onClick={(e) =>
                                  sizeFilter(tier._id, e.target.checked)
                                }
                                value={tier._id}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                for="filter-mobile-size-0"
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {tier.tier}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>

              <div className="flex items-center">
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      onClick={sortDropdownFunc}
                      type="button"
                      className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      id="menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      Sort
                      <svg
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`${
                      sortDropdown ? "" : "hidden"
                    } absolute  right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <Link
                        onClick={nameA_Z_filter}
                        to="#"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        Product Name : A to Z
                      </Link>
                      <Link
                        onClick={nameZ_A_filter}
                        to="#"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                      >
                        Product Name : Z to A
                      </Link>
                      <Link
                        to="#"
                        onClick={priceLowToHigh}
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-3"
                      >
                        Price: Low to High 🔺
                      </Link>
                      <Link
                        onClick={priceHighToLow}
                        to="#"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-4"
                      >
                        Price: High to Low 🔻
                      </Link>

                      <Link
                        onClick={removefilter}
                        to="#"
                        className="font-medium text-gray-900 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Remove Filter ❌
                      </Link>
                    </div>
                  </div>
                </div>

                {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7" onClick={filterSideBarController}>
                                    <span className="sr-only">View grid</span>
                                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" >
                                        <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
                                    </svg>
                                </button> */}
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={filterSideBarController}
                >
                  <span className="sr-only">Filters</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    <li>
                      <Link to="#">Totes</Link>
                    </li>
                    <li>
                      <Link to="#">Backpacks</Link>
                    </li>
                    <li>
                      <Link to="#">Travel Bags</Link>
                    </li>
                    <li>
                      <Link to="#">Hip Bags</Link>
                    </li>
                    <li>
                      <Link to="#">Laptop Sleeves</Link>
                    </li>
                  </ul>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <button
                        type="button"
                        onClick={colorDropdownHandler}
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-0"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Category's
                        </span>
                        <span className="ml-6 flex items-center">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            style={{
                              transition: "0.5s all",
                              transform: `${
                                colorDropdown ? "rotate(135deg)" : ""
                              }`,
                            }}
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      className={`pt-6 ${colorDropdown ? "" : "hidden"} `}
                      id="filter-section-0"
                    >
                      <div className="space-y-4">
                        {category.map((category) => {
                          return (
                            <div className="flex items-center">
                              <input
                                id="filter-color-0"
                                name="category"
                                onClick={(e) =>
                                  categoryFilter(category._id, e.target.checked)
                                }
                                value={category._id}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                for="filter-color-0"
                                className="ml-3 text-sm text-gray-600"
                              >
                                {category.subcategory}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <button
                        onClick={categoryDropddownHandler}
                        type="button"
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-1"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Flavor's
                        </span>
                        <span className="ml-6 flex items-center">
                          <svg
                            className="h-5 w-5 "
                            style={{
                              transition: "0.5s all",
                              transform: `${
                                categoryDropdown ? "rotate(135deg)" : ""
                              }`,
                            }}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      className={`pt-6 ${categoryDropdown ? "" : "hidden"} `}
                      id="filter-section-1"
                    >
                      <div className="space-y-4 ">
                        {flavor.map((flavor) => {
                          return (
                            <div className="flex items-center">
                              <input
                                id="filter-category-0"
                                name="flavor"
                                onClick={(e) =>
                                  categoryFilter(flavor._id, e.target.checked)
                                }
                                value={flavor._id}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                for="filter-category-0"
                                className="ml-3 text-sm text-gray-600"
                              >
                                {flavor.cakeFlavor}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <button
                        type="button"
                        onClick={sizeDropdownHandler}
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-2"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Size's
                        </span>
                        <span className="ml-6 flex items-center">
                          <svg
                            className="h-5 w-5"
                            style={{
                              transition: "0.5s all",
                              transform: `${
                                sizeDropdown ? "rotate(135deg)" : ""
                              }`,
                            }}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      className={`pt-6 ${sizeDropdown ? "" : "hidden"}`}
                      id="filter-section-2"
                    >
                      <div className="space-y-4">
                        {size.map((size) => {
                          return (
                            <div className="flex items-center">
                              <input
                                id="filter-size-0"
                                name="size"
                                onClick={(e) =>
                                  sizeFilter(size._id, e.target.checked)
                                }
                                value={size._id}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                for="filter-size-0"
                                className="ml-3 text-sm text-gray-600"
                              >
                                {size.cakesize}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <button
                        type="button"
                        onClick={tierDropdownHandler}
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-2"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">Tier</span>
                        <span className="ml-6 flex items-center">
                          <svg
                            className="h-5 w-5"
                            style={{
                              transition: "0.5s all",
                              transform: `${
                                tierDropdown ? "rotate(135deg)" : ""
                              }`,
                            }}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      className={`pt-6 ${tierDropdown ? "" : "hidden"}`}
                      id="filter-section-2"
                    >
                      <div className="space-y-4">
                        {tier.map((tier) => {
                          return (
                            <div className="flex items-center">
                              <input
                                id="filter-size-0"
                                name="tier"
                                onClick={(e) =>
                                  sizeFilter(tier._id, e.target.checked)
                                }
                                value={tier._id}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                for="filter-size-0"
                                className="ml-3 text-sm text-gray-600"
                              >
                                {tier.tier} Tier
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </form>

                <div className="lg:col-span-3">
                  <ProductBanner />

                  <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
                      <h2 className="sr-only">Products</h2>

                      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                        {/* {productData.map((e, i) => {
                          return (
                            <ShowProductComponent
                              id={e._id}
                              name={e.productName}
                              price={e.price}
                              image={e.images[0]}
                            />
                          );
                        })} */}
                        {cakes.map((cakes, i) => (
                          <CakeItem
                            cakename={cakes.name}
                            discount={cakes.discount}
                            images={cakes.images}
                            size={cakes.size}
                            Discount={cakes.discount}
                            flavor={cakes.flavor}
                            productId={cakes._id}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                      <h2 className="sr-only">Products</h2>

                      {/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {useFilterData.length > 0
                          ? useFilterData.map((e, i) => {
                              return (
                                <ShowProductComponent
                                  id={e._id}
                                  name={e.productName}
                                  price={e.price}
                                  image={e.images[0]}
                                  category={e.category}
                                />
                              );
                            })
                          : filterData.map((e, i) => {
                              return (
                                <ShowProductComponent
                                  id={e._id}
                                  name={e.productName}
                                  price={e.price}
                                  image={e.images[0]}
                                  category={e.category}
                                />
                              );
                            })}
                      </div> */}
                    </div>
                  </div>

                  {/* <ProductPage colorArr= {colorArr} setColorArr = {colorArr} sizeArr={sizeArr}/>  */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
