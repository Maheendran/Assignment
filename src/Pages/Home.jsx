import React, { useContext } from "react";
import { Appcontext } from "../AppContex";
import { Banner } from "../components/Banner";
import { GridShow } from "../components/GridShow";
import { Loading } from "../components/Loading";
import "../Style/Home.css";
export const Home = () => {
  const { loading } = useContext(Appcontext);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Banner />
          <GridShow />
        </div>
      )}
    </>
  );
};
