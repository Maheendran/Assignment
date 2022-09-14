import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import "../Style/Banner.css";
export const Banner = () => {
  const [slider, setSlider] = useState(0);
  const [state, setState] = useState([]);

  var timer;
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime")
      .then((res) => setState(res.data.data));
    timer = setInterval(() => {
      setSlider(slider + 1);
      if (slider == 10) {
        setSlider(0);
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [slider]);

  return (
    <>
      <div className="dummy_div"></div>
      <div className="banner_conatiner">
        <div className="main_banner">
          <img src={state[slider]?.images.jpg.large_image_url} alt="" />
        </div>
        <div className="main_banner_heading">
          <h1>{state[slider]?.title}</h1>
          <h2>{state[slider]?.genres[0].name}</h2>
          <div className="flex_bottom_div">
            <AiTwotoneStar style={{ color: "gold" }} size={"2rem"} />
            <h1>{state[slider]?.score}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
