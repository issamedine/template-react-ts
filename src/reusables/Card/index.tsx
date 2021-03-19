import React from "react";
import { IPropsHome } from "../../models/IPropsHome";
import "./Card.scss";

const Card: React.FC<IPropsHome> = ({ title, img, itemCard, install }) => {
  return (
    <div
      className={`${itemCard} ${install && " custom-text-card-install"} `}
      style={{
        // backgroundImage: `url(${img})`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "left",
        // backgroundBlendMode: "darken",
        height: `${!itemCard && "350px"}`,
      }}
    >
      {!install && <img src={img} alt=""/>}
      <div className="title-card">
        {title}
      </div>
      {install && (
        <div className="footer-card-install">
          <p>EN SOVOIR PLUS</p>
          <i className="fas fa-arrow-right"></i>
        </div>
      )}
    </div>
  );
};

export default Card;
