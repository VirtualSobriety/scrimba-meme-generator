import React, { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/3si4.jpg",
  });

  const [allMemes, setAllMemes] = useState("http://i.imgflip.com/3si4.jpg");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
  }, []);

  function getMemeImage() {
    let randomNumber = Math.floor(Math.random() * 100);
    let memesArray = allMemes.data.memes[randomNumber].url;
    setMeme((prevData) => {
      return { ...prevData, randomImage: memesArray };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <main className="meme-main-container">
      <div className="meme-input-container">
        <label>
          Top Text
          <input
            className="meme-input"
            type="text"
            placeholder="Shut up"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>
        <label>
          Bottom Text
          <input
            className="meme-input"
            type="text"
            placeholder="And take my money!"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={getMemeImage} className="meme-button">
          Get a new meme image 🖼️{" "}
        </button>
      </div>
      <div className="meme-image-container">
        <img className="meme-image" src={meme.randomImage} />
        {/* {meme.topText && meme.topText > "" ?  (
          <h2 className="meme-text top">{meme.topText}</h2>
        ) : (
          <h2 className="meme-text top">Shut Up</h2>
        )} */}
        <h2 className="meme-text top">{meme.topText || "Shut up"}</h2>
        {meme.bottomText ? (
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        ) : (
          <h2 className="meme-text bottom">and take my money</h2>
        )}
      </div>
    </main>
  );
}
