import React from "react";

import './Slider.scss'

import slideAccueil from "../../assets/imgs/slide.png";
import slideBoutique from "../../assets/imgs/slide-boutique.png";
import { useLocation } from "react-router";

const Slider: React.FC = () => {

  const { pathname } = useLocation();

  return (
    <div
      className={`slide ${
        pathname === "/boutique" && "custom-slide-not-accueil"
      }`}
    >
      {pathname === "/" && (
        <img src={slideAccueil} alt="" className="h-accueil" />
      )}
      {pathname === "/boutique" && (
        <img src={slideBoutique} alt="" className="h-shop" />
      )}
      {pathname === "/boutique" && (
        <div className="desc-slide">
          <div className="custom-desc-slide">
            <span className="title-desc">Nos Produits</span>
            <br />
            <span className="chemin-desc">
              <span>Acueil</span>
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
              <span>Boutique</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
