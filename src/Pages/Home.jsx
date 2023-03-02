import { useState } from "react";

import "./Home.css";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  const [color, setColor] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setColor(value.split(" ").map((item) => setColor(item)));
  };

  return (
    <div className="Home">
      <div className="container">
        <div className="search">
          <input
            type="text"
            className="input"
            placeholder="search color"
            onChange={onChange}
          />
          <BsSearch />
        </div>

        <div className="colorType">
          <div className="background" style={{ backgroundColor: color }}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
