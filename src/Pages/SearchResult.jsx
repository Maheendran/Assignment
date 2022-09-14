import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SearchResult = () => {
  const param = useParams();
  const [serach, setSearch] = useState([]);
  console.log(param);
  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/anime").then((res) => {
      const Update = res.data.data.filter((item) => item.title == param.name);
      return setSearch(Update);
    });
  }, []);

  return <></>;
};
