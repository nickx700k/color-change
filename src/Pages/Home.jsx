import React, { useEffect, useState } from "react";

import "./Home.css";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  const [newColor, setNewColor] = useState("");
  //   const colors = ["blue", "red", "orange"];

  const colors = [
    {
      name: "blue",
      color: "blue",
    },
    {
      name: "red",
      color: "red",
    },
    {
      name: "orange",
      color: "orange",
    },
  ];

  const [bgColor, setBgColor] = useState(null);
  const styles = {
    backgroundColor: bgColor,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  };
  useEffect(() => {
    colors.map((color) => {
      if (newColor.includes(color.name)) {
        setBgColor(color.color);
      }
      if (newColor === "" && newColor.includes(!color.name)) {
        setBgColor("#fff");
      }
    });
  }, [newColor]);
  console.log(bgColor, "bg", colors, "colors");
  return (
    <div className="Home">
      <div className="container">
        <div className="search">
          <input
            type="text"
            className="input"
            placeholder="search color"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
          />
          <BsSearch />
        </div>

        <div className="colorType">
          <div className="background" style={styles}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
