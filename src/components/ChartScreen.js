import React, { useState } from "react";
import "./ChartScreen.css";
/**
 * @author
 * @function ChartScreen
 **/

const ChartScreen = (props) => {
  const [message, setMessage] = useState([
    {
      name: "suyog",
      image:
        "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "sdfaf",
    },
    { message: "ha bol" },
  ]);
  return (
    <div>
      ChartScreen
      {message.map((mesg) => (
        <div>
          <p>{mesg.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ChartScreen;
