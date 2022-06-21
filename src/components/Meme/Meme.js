import React, { useEffect, useState } from "react";
import "./Meme.styles.css";

export const Meme = () => {
  const [data, setData] = useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/1ur9b0.jpg",
  });
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data));
  }, []);

  function onMemeChange() {
    setData((prevData) => ({
      ...prevData,
      image:
        memes.data.memes[Math.floor(Math.random() * memes.data.memes.length)]
          .url,
    }));
  }

  console.log(data);

  function handleChange(e) {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  }

  return (
    <div className="meme">
      <div className="inputs">
        <input
          type="text"
          placeholder="Shut up"
          name="topText"
          value={data.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="and take my money"
          name="bottomText"
          value={data.bottomText}
          onChange={handleChange}
        />
      </div>
      <button onClick={onMemeChange}>Get a new meme image!</button>
      <div className="image-container">
        <img alt="meme" src={data.image} />
        <h2 className="image-text top">{data.topText}</h2>
        <h2 className="image-text bottom">{data.bottomText}</h2>
      </div>
    </div>
  );
};

export default Meme;
