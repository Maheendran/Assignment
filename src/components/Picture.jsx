import React, { useContext, useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import "../Style/Home.css";
import { Appcontext } from "../AppContex";
const getdata = JSON.parse(localStorage.getItem("final") || "[]");
export const Picture = ({ src, id, e }) => {
  const { updated } = useContext(Appcontext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImagetoboard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImagetoboard = (id) => {
    const update = updated.filter((item) => item.mal_id === id);

    var database = {
      id: update[0].mal_id,
      title: update[0].title,
      url: update[0].images.jpg.image_url,
    };
    getdata.push(database);
    localStorage.setItem("final", JSON.stringify(getdata));
  };

  return (
    <>
      {isDragging && (
        <div className="wish_div" ref={drop}>
          <h2>Add to Wishlist</h2>
        </div>
      )}
      <div key={id}>
        <img
          src={src}
          key={id}
          ref={drag}
          style={{
            boxShadow: isDragging ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "",
          }}
        />

        <Link to={`/details/${e.title}`}>
          <div className="grid_hover_div">
            <h1 id="title_banner">{e.title}</h1>
            <h1 id="genre_banner">{e.genres[0].name}</h1>
            <div></div>

            <div className="flex_bottom_div">
              <AiTwotoneStar style={{ color: "gold" }} size={"2rem"} />
              <h1>{e.score}</h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
