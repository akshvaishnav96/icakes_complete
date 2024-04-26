import React from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CakePage from "./pages/CakePage";
import Quality from "./pages/Quality";
import City from "./pages/City";
import Topdeals from "./pages/Topdeals";
import Flavours from "./pages/Flavours";
import NavFooterLayout from "./pages/layout/NavFooterLayout";
import ProductQuickView from "./pages/components/home/ProductQuickView";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // user roughts +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      <Route path="/" element={<NavFooterLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/quickView/:id" element={<ProductQuickView />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cakes/:subcategory_name" element={<CakePage />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/flavours" element={<Flavours />} />
        <Route path="/city" element={<City />} />
        <Route path="/top-deals" element={<Topdeals />} />
      </Route>
      // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}
