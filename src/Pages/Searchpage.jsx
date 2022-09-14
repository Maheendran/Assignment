import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "../Style/DetailPage.css";
import { commonlink } from "../Url";
export const Searchpage = () => {
  const detailparam = useParams();
  console.log(detailparam.name, "detailsearxh");

  const [detailpage, setDetailpage] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    axios
      .get(commonlink)
      .then((res) => {
        const Updatee = res.data.data.filter(
          (item) => item.title == detailparam.name
        );
        return setDetailpage(Updatee);
      })
      .catch(console.error());
  }, [detailparam.name]);

  const opts = {
    height: "600px",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  const handleshow = (e) => {
    setShow(e);
  };
  return (
    <>
      <div className="dummy_div"></div>

      {detailpage == null ? (
        <div className="noresult">
          <img
            src="https://th.bing.com/th/id/R.dfdcaf5815f36d2398fb372b2f294a73?rik=xoX7sxHHzdKOew&riu=http%3a%2f%2fpictures.dealer.com%2fa%2falanjayautomotivenetwork%2f0193%2fdfdcaf5815f36d2398fb372b2f294a73x.jpg&ehk=HFeaR7hpgWg7iGhU1ClaBjUS7BktIPbgYOYflie9BoA%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
      ) : (
        <div className="detail_container">
          <div className="left_detail_div">
            <img src={detailpage[0]?.images.jpg.image_url} alt="" />
          </div>
          <div className="right_detail_div" key={detailpage[0]?.mal_id}>
            <div className="flex_box">
              <h1 id="title_detail">{detailpage[0]?.title}</h1>(
              <h1 id="year_detail">{detailpage[0]?.year}</h1>)
            </div>

            <h1 id="genres_detail">{detailpage[0]?.genres[0].name}</h1>
            <div className="flex_box">
              <FaCalendarAlt style={{ color: "black" }} size={"2rem"} />
              <h3>{detailpage[0]?.broadcast.string}</h3>
            </div>

            <div className="flex_box">
              <BiTimeFive style={{ color: "black" }} size={"2rem"} />{" "}
              <h3>{detailpage[0]?.broadcast.time}</h3>
            </div>
            <div className="flex_box">
              <GoDeviceCameraVideo style={{ color: "black" }} size={"2rem"} />
              <h3>{detailpage[0]?.duration}</h3>
            </div>
            <div className="flex_box">
              <AiTwotoneStar style={{ color: "gold" }} size={"2rem"} />
              <h3 id="score_detail">{detailpage[0]?.score}</h3>
            </div>

            <p id="background_detail">{detailpage[0]?.background}</p>

            <div>
              <button id="button_watch" onClick={() => handleshow(!show)}>
                Watch Now
              </button>
              {show && <BsArrowDownCircle id="down_arrow" size={"2rem"} />}
            </div>
          </div>
        </div>
      )}
      {show && (
        <YouTube videoId={detailpage[0]?.trailer.youtube_id} opts={opts} />
      )}
    </>
  );
};
