import React, { useContext } from "react";
import { Appcontext } from "../AppContex";
import "../Style/Home.css";
export const Pagination = () => {
  const { handlebackpage, handlefrontpage, count } = useContext(Appcontext);
  return (
    <>
      <div className="pagination_div">
        <button onClick={() => handlebackpage()} disabled={count == 1}>
          -
        </button>
        <h1>{count}</h1>
        <button onClick={() => handlefrontpage()}>+</button>
      </div>
    </>
  );
};
