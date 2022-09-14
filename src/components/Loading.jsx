import React from "react";
import "../Style/Home.css";
export const Loading = () => {
  return (
    <>
      <div className="loading">
        <div className="inner_loading">
          <img
            src="https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
