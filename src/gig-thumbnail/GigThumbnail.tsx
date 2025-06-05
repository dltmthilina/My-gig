import "./GigThumbnail.css";
import manImage from "../assets/man.png";
import Html from "../assets/Html.png";
import Js from "../assets/Js.png";
import Css from "../assets/Css.png";
import React from "../assets/React.png";
import Next from "../assets/Next.png";
import Mui from "../assets/Mui.png";
import Btp from "../assets/Btp.png";
import Antd from "../assets/AntD.png";

const GigThumbnail = () => {
  return (
    <div className="gig-container">
      <img src={manImage} className="man-image" />
      <div className="title-container">
        <div className="title-part-one">
          <span className="frontend">FRONTEND</span>
          <span className="web">WEB</span>
        </div>
        <div className="title-part-two">
          <span className="development">DEVELOPMENT</span>
        </div>
      </div>
      <div className="logo-container">
        <div className="logo">
          <span>HTML</span>
          <img src={Html} alt="html logo" />
        </div>
        <div className="logo">
          <span>JavaScript</span>
          <img src={Js} alt="js logo" />
        </div>
        <div className="logo">
          <span>CSS</span>
          <img src={Css} alt="css logo" />
        </div>
        <div className="logo">
          <span>ReactJS</span>
          <img src={React} alt="react logo" />
        </div>
        <div className="logo">
          <span>NextJS</span>
          <img src={Next} alt="next logo" />
        </div>
        <div className="logo">
          <span>MaterialUI</span>
          <img src={Mui} alt="mui logo" />
        </div>
        <div className="logo">
          <span>Bootstrap</span>
          <img src={Btp} alt="btp logo" />
        </div>
        <div className="logo">
          <span>ANTD</span>
          <img src={Antd} alt="AntD logo" />
        </div>
      </div>
      <div className="contact">Contact Now</div>
    </div>
  );
};

export default GigThumbnail;
