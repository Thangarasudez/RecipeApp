import React from "react";
import { ImSpoonKnife } from "react-icons/im";

const Header = () => {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg)`,
      }}
    >
      <div className="layer">
        <div className="container">
          <nav className="logo-wrapper">
            <div className="logo">
              <ImSpoonKnife className="brand" />
            </div>
          </nav>
          <div className="header-text">
            <h1>Rifluxyss Recipe App</h1>
            <p>Let's have fun building this app together...</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
