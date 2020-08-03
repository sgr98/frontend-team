import React, { useState, useEffect } from "react";
import "./clubDescription.css";
import axios from "axios";
import parser from "html-react-parser";

const ClubDescription = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/front/club/${props.match.params.id}`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);
  return (
    <div>
      <div className="ClubDescrition-heading-HighlightsHeading">
        <div className="ClubDescrition-lineAbove-HighlightsHeading" />
        <h3>{data ? data["Club name"] : "Club Name"}</h3>
      </div>
      <div className="ClubDescrition-description">
        {data && data["Club Description"]
          ? parser(data["Club Description"])
          : "Club Description"}
      </div>
    </div>
  );
};

export default ClubDescription;
