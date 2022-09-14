import React, { useContext, useState } from "react";
import "../Style/Navbar.css";
import { BsSearch, BsBasketFill } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { Appcontext } from "../AppContex";
import { useDrop } from "react-dnd";
export const Navbar = () => {
  const [inputData, setInputData] = useState("");
  const { handleclick } = useContext(Appcontext);

  const [cart, setCart] = useState();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImagetpboard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addImagetpboard = (id) => {
    setCart(id);
  };

  return (
    <>
      <div className="nav_conatiner">
        <div className="left_nav">
          <NavLink to={"/"}>
            <h1>LOGO</h1>
          </NavLink>
        </div>

        <div className="middle_nav">
          <input
            type="text"
            onChange={(e) => setInputData(e.target.value)}
            placeholder={"Search.."}
          />
          <Link to={`/details/${inputData}`}>
            <BsSearch size={"1.4rem"} style={{ color: "grey" }} />
          </Link>
          <div className="filter_section">
            <Link to={"/"}>
              <h3 onClick={() => handleclick("Action")}>Action</h3>
            </Link>
            <Link to={"/"}>
              <h3 onClick={() => handleclick("Comedy")}>Comedy</h3>
            </Link>
            <Link to={"/"}>
              <h3 onClick={() => handleclick("Adventure")}>Adventure</h3>
            </Link>
            <Link to={"/"}>
              <h3 onClick={() => handleclick("Drama")}>Drama</h3>
            </Link>
            <Link to={"/"}>
              <h3 onClick={() => handleclick("Adventure")}>Mystery</h3>
            </Link>
          </div>
        </div>
        <div className="right_nav">
          <MdOutlineAccountCircle
            size={"1.7rem"}
            style={{ color: "grey" }}
            id="bascket"
          />
          <div className="board" ref={drop}>
            <Link to={"/wishlist"}>
              <BsBasketFill
                size={"1.7rem"}
                style={{ color: "grey" }}
                id="bascket"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
