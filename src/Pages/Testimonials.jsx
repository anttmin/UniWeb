import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const Datas = [
    {
      id: 1,
      name: "James",
      city: "Edusity.USA",
      src: "https://i.pinimg.com/474x/80/5f/69/805f6966f9ff13b3dad64b3c10f823b8.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 2,
      name: "Marry",
      city: "NewYork.USA",
      src: "https://i.pinimg.com/474x/55/91/80/5591809ff56c527ff1897828d2fb3290.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 3,
      name: "Watt",
      city: "MarryLand.USA",
      src: "https://i.pinimg.com/474x/b8/db/67/b8db6762396b087174a53f61b11ad764.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 4,
      name: "CherryChole",
      city: "Losangles.USA",
      src: "https://i.pinimg.com/474x/97/57/cf/9757cf58d9a9cf13418ff469d6a54250.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];
  console.log(Datas);

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testi">
      <div className="tittle">
        <p className="studentsSay">"What Students Say"</p>
      </div>

      <Slider {...settings}>
      {Datas.map((Data) => {
         
        return (
        
          <div className="Mainn">
             <div className="ImgSction">
              <img src={Data.src} className="image" alt="img"/>
             </div>
             <h2 className="Name">{Data.name}</h2>
             <p className="City">{Data.city}</p>
             <p className="passsage">{Data.description}</p>
             <button className="btn">Read More</button>
          </div>

        );
      })}
      </Slider>


    </div>
  );
};

export default Testimonials;

       
