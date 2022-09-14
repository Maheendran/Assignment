import React, { useContext } from "react";
import "../Style/GridShow.css";
import { Appcontext } from "../AppContex";
import { Picture } from "./Picture";
import { Pagination } from "./Pagination";
export const GridShow = () => {
  const { updated } = useContext(Appcontext);
  return (
    <>
      <div className="grid_container">
        {updated.map((e) => (
          <div className="grid_inner_div" key={e.mal_id}>
            <Picture src={e.images.jpg.image_url} e={e} id={e.mal_id} />
          </div>
        ))}
      </div>
      <Pagination />
    </>
  );
};
