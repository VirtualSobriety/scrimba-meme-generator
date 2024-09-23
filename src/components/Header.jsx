import React from "react";

export default function Header() {
  return (
    <div className="header-container">
      <h1 className="header-left">
        <img
          className="header-image"
          src="src/images/troll-face.png"
          alt="troll face"
        />
        Meme Generator
      </h1>
      <p className="header-right">React Course - Project 3 </p>
    </div>
  );
}
