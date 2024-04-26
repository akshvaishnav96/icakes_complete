import { Outlet } from "react-router-dom";

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function NavFooterLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
