import React from "react";
import "./Charts.css";
import ChartRow from "./ChartRow";

/**
 * @author
 * @function
 **/

const Charts = (props) => {
  return (
    <div className="charts">
      <ChartRow
        name="Suyog"
        message="hello suyog"
        timestamp="4min ago"
        profilePic="https://images.pexels.com/photos/4523345/pexels-photo-4523345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />
    </div>
  );
};

export default Charts;
