import React from "react";
import ImgOne from "../IMG/program-1.png";
import ImgTwo from "../IMG/program-2.png";
import ImgThree from "../IMG/program-3.png";
import IconOne from "../IMG/program-icon-1.png";
import IconTwo from "../IMG/program-icon-2.png";
import IconThree from "../IMG/program-icon-3.png";

const Programs = () => {
  return (
    <>
      <div className="Programs">
        <div className="program">
       

       
          <div className="pro">  
         
            <div className="Main">
              <img src={ImgOne} alt=""/>
              <div className="layout">
                <img src={IconOne} className="Icon" alt="" />
                <p className="text">Graduated Degree</p>
              </div>
            </div>

            <div className="Main">
              <img src={ImgThree} alt=""/>
              <div className="layout">
                <img src={IconTwo} className="Icon" alt=""/>
                <p className="text">Graduated Degree</p>
              </div>
            </div>

            <div className="Main">
              <img src={ImgTwo} alt=""/>
              <div className="layout">
                <img src={IconThree} className="Icon" alt=""/>
                <p className="text">Graduated Degree</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
