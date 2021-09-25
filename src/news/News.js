import React from "react";
import { getHeadlinesUtils } from "../Utilities/Utilities";
import Checkbox from "@mui/material/Checkbox";
import "./news.css";
// import lang from "../constants/strings";
import Divider from "@mui/material/Divider";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function News(props) {
  const getHeadlines = async () => {
    try {
      const response = await getHeadlinesUtils();
    } catch (error) {}
  };

  return (
    <div>
      <div className="news">
        <div className="newsSourceName">News Name Goes Here</div>
        <Divider variant="middle" />
        <div className="headlines">
          <div className="imageContainer"></div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="headlineDetails">
            <div className="heading">Hello</div>
            <div className="timeDate">22:00</div>
            <div className="star">
              <Checkbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
