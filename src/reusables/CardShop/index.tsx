import React from "react";
import "./CardShop.scss";

import cardShop from "../../assets/imgs/card-shop.png";
import { BoutiqueType } from "../../redux/types";

interface IProps {
  shop: BoutiqueType;
}

const CardShop: React.FC<IProps> = ({ shop }) => {
  return (
    <div className="wrapper-card-shop">
      <img src={cardShop} alt="" />
      <div className="footer-card-container">
        <div className="footer-card-shop-desc">
          <p className="desc">{shop.product_name}</p>
          <p className="price">{shop.price} ML</p>
        </div>
        <div className="footer-card-shop">
          <p>EN SOVOIR PLUS</p>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default CardShop;
