import React from "react";
import vector from "../../Assets/images/Vector.png";
import vector1 from "../../Assets/images/Vector (1).png";
import dotwithcircle from "../../Assets/images/entypo_info-with-circle.svg";

import NewsComponent from "../../Components/NewsComponent/NewsComponent";
function NewsSection() {
  return (
    <div className="container pt-20">
      <div className="flex pl-12  mb-6 items-center">
        <span>
          <img src={dotwithcircle}></img>
        </span>
        <h1 className="text-primary font-normal text-3xl text-left  pl-3">
          News And Information
        </h1>
      </div>
      <div className="border-solid border-b-2 border-secondary"></div>

      <div>
        <NewsComponent />
      </div>
    </div>
  );
}
export default NewsSection;
