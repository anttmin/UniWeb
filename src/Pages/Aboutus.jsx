import React from "react";
import Slider from "react-slick";


const Aboutus = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,

  };


  return (
    <div className="aboutus">
      
      <Slider {...settings}>

      <div className="Card">
      <img src="https://admissions.uni.edu/sites/default/files/styles/two_col/public/carousel-images/220721_biochemistry_084-web.jpg.webp?itok=JQDyKC_I" className="aboutImg" alt="img"/>
       <div className="cardmini">
       <h3 className="CardTitle">RESOURCES FOR YOU</h3>
        <h1 className="CardRequire">Admission Requirements</h1>
        <p className="CardReview">Review the requirements for admission to UNI for freshmen, transfer, international and other applicants.</p>
        <div className="BtnArea">
        <button>Left</button>
        <button>Right</button>
       </div>
      </div>
      </div>

      <div className="Card">
      <img src="https://admissions.uni.edu/sites/default/files/styles/two_col/public/carousel-images/220721_biochemistry_084-web.jpg.webp?itok=JQDyKC_I" className="aboutImg" alt="img"/>
       <div className="cardmini">
       <h3 className="CardTitle">RESOURCES FOR YOU</h3>
        <h1 className="CardRequire">Admission Requirements</h1>
        <p className="CardReview">Review the requirements for admission to UNI for freshmen, transfer, international and other applicants.</p>
        <div className="BtnArea">
        <button>Left</button>
        <button>Right</button>
       </div>
      </div>
      </div>

      <div className="Card">
      <img src="https://admissions.uni.edu/sites/default/files/styles/two_col/public/carousel-images/220721_biochemistry_084-web.jpg.webp?itok=JQDyKC_I" className="aboutImg" alt="img"/>
       <div className="cardmini">
       <h3 className="CardTitle">RESOURCES FOR YOU</h3>
        <h1 className="CardRequire">Admission Requirements</h1>
        <p className="CardReview">Review the requirements for admission to UNI for freshmen, transfer, international and other applicants.</p>
        <div className="BtnArea">
        <button>Left</button>
        <button>Right</button>
       </div>
      </div>
      </div>
     

      </Slider>

    </div>
  );
};

export default Aboutus;
