import React from "react";
import herIcon from "../IMG/dark-arrow.png";
import ImgforAds from '../IMG/about.png'
import ImgLogo from '../IMG/play-icon.png'


const Hero = () => {
  return (
    <div>
      {/* Hero section  */}
      <div className="MainHero">
      <div className="Hero1">
        <h2>We Ensure Better Education</h2>
        <h2>For a Better World</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolore
          delectus fugit perspiciatis non facilis error praesentium deleniti
          dicta assumenda natus quibusdam doloribus, fugiat nisi odit facere id
          expedita debitis.
        </p>
        <button className="Btn">
          Explore More <img src={herIcon} className="darkArrow" alt="title" />
        </button>
      </div>
      </div>
      {/* Hero section  */}

      {/* Ads Section  */}
       <div className="AdsSection">
        <div className="ImgSection">
          <div className="Image"><img alt="" src={ImgforAds}/><img alt="" src={ImgLogo} className="playIcon"/></div>
        </div>
       
        <div className="passage">
          <h2>About University</h2>
          <h1>Nuturing Tomorrow's <br/>Leaders Today</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ea repudiandae molestias magnam culpa quidem, provident esse ad dignissimos maxime possimus ipsum expedita! Odio voluptas ut, totam obcaecati sequi incidunt.<br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum et ipsum? Id alias ipsa voluptatum fuga aspernatur pariatur. Voluptas alias nemo quod tempore porro natus nulla molestiae officiis fuga
          Lorem ipsum dolor, <br/>sit amet consectetur adipisicing elit. Perspiciatis ipsum, blanditiis, odio possimus modi, totam laborum id expedita aliquam delectus ducimus reiciendis quod neque ipsam odit. Pariatur non at rerum.
          </p>
        </div>
       </div>

      {/* Ads Section  */}
      <div>

      </div>
    </div>
  );
};

export default Hero;
