import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChartRow.css";
/**
 * @author
 * @function ChartRow
 **/

const ChartRow = ({ name, message, profilePic, timestamp }) => {
  return (
    <div className="chart">
      <Avatar className="chart_image" alt={name} src={profilePic} />
      <div className="chart_data">
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
      <p className="time">{timestamp}</p>
    </div>
  );
};

export default ChartRow;
