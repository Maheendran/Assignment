import React from "react";
import { Link } from "react-router-dom";
import "../Style/Wishlist.css";
const getdata = JSON.parse(localStorage.getItem("final") || "[]");
export const Wishlist = () => {
  return (
    <>
      <div className="dummy_div"></div>
      <div className="main_whishlist">
        {getdata.map((e) => (
          <Link to={`/details/${e.id}`}>
            <div className="grid_whishlist" key={e.id}>
              <img src={e.url} alt="" />
              <h3>{e.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
