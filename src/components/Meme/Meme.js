import React, { useState } from "react";
import memesData from "../../memesData";
import "./Meme.styles.css";

export const Meme = () => {

const [image, setImage] = useState("https://i.imgflip.com/1ur9b0.jpg");

    function onMemeChange(){
        setImage(memesData.data.memes[Math.floor(Math.random()*memesData.data.memes.length)].url)
    }

  return (
    <div className="meme">
      <div className="inputs">
        <input type="text" placeholder="Shut up"/>
        <input type="text" placeholder="and take my money"/>
      </div>
      <button onClick={onMemeChange} >Get a new meme image!</button>

      <img alt="meme" src={image}/>
    </div>
  );
};

export default Meme;
