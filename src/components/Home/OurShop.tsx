import React from "react";

import shopLeft from "../../assets/imgs/shop-left.png";
import shopRight from "../../assets/imgs/shop-right.png";

const OurShop: React.FC = () => {
  return (
    <div className="wrapper-our-shop container">
      <div className="img-left">
        <img src={shopLeft} alt="" />
      </div>
      <div className="bloc-right-shop">
        <span className="title">Notre magasin</span>
        <div className="card-shop">
          <img src={shopRight} alt="" />
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium id soluta recusandae et ipsum. Quidem repellendus ab
              consectetur
            </p>
            <div className="footer-card-our-shop">
              <p>EN SOVOIR PLUS</p>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
