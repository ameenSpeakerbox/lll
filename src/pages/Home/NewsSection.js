import React from "react";
import vector from "../../Assets/images/Vector.png";
import vector1 from "../../Assets/images/Vector (1).png";
import dotwithcircle from "../../Assets/images/entypo_info-with-circle.svg";

import NewsComponent from "../../Components/NewsComponent/NewsComponent";
import { Link } from "gatsby";
function NewsSection() {
  return (
    <div className="container pt-20">
      <div className="flex lg:pl-12  mb-6 items-center">
        <span>
          <img src={dotwithcircle} className='w-8 lg:w-auto' />
        </span>
        <Link to="/newsAndInformation" className="text-primary font-normal lg:text-3xl text-left  pl-2">
          News And Information
        </Link>
      </div>
      
      <div className="border-solid border-b-2 border-secondary"></div>

      <div>
        <NewsComponent />
      </div>
    </div>
  );
}
export default NewsSection;
