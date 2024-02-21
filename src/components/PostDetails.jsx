import React from "react";
import { CalendarDaysIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const PostDetails = ({ posts }) => {
  const { description, image, title, date } = posts;
  // console.log(post);
  return (
    <div className="details">
       <div className="secHalf">
        <div>
        <p className="title">{title}</p>
        <p className="date">
          <CalendarDaysIcon className="clockIcon" /> {date}
        </p>
        </div>

        <div>
          <Link to={"/"}><ArrowLeftIcon  className="arrowLeft"/></Link>
        </div>
      </div>
      <img className="image" src={image} alt={title} />
      <p className="description">{description}</p>
    </div>
  );
};

export default PostDetails;
