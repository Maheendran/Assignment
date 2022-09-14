import React from "react";
import { Route, Routes } from "react-router-dom";
import { DetailPage } from "../Pages/DetailPage";
import { Home } from "../Pages/Home";
import { Searchpage } from "../Pages/Searchpage";

import { Wishlist } from "../Pages/Wishlist";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:title" element={<DetailPage />} />
        <Route path="/search/:name" element={<Searchpage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
};
