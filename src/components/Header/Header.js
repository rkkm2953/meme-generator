import troll from "../../assets/troll.png";
import "./Header.styles.css"

export const Header = () => {
  return (
    <div className="header">
      <div className="header-troll">
        <img alt="troll" src={troll} />
        <h3>Meme Generator</h3>
      </div>
      <p>React Course - Project 3</p>
    </div>
  );
};

export default Header;
