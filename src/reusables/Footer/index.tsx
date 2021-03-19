import React from "react";

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className=" footer-bg">
      <div className="wrapper-footer container">
        <span className="bar"></span>
        <div className="content-footer">
          <div className="logo">logo</div>
          <div className="links">
            <p className="title">Lien utiles</p>
            <p>Configurateur</p>
            <p>Notre magasin</p>
            <p>Notice et installation</p>
            <p>Livraison transport</p>
          </div>
          <div className="contact">
            <p className="title">Nous contacter</p>
            <p className="item">
              <span className="custom-item">Adress :</span> <br />
              <span>
                3 rue du champ de verger Allonnes, Pays de la loire, France
              </span>
            </p>
            <p className="item">
              <span className="custom-item">Télephone :</span> <br />
              <span>+33 1 23 45 67 89</span>
            </p>
          </div>
          <div className="hours">
            <p className="title">Horaies</p>
            <p className="custom-item">Lundi à Vendredi</p>
            <p>
              <i className="far fa-clock"></i>
              <span>7:30-12:00</span>
            </p>
            <p>
              <i className="far fa-clock"></i>
              <span>7:30-12:00</span>
            </p>
            <p>
              <span className="custom-item">Samedi</span> <br />
              <span>(Férmé les samedis de janvier et février)</span>
            </p>
            <p>
              <i className="far fa-clock"></i>
              <span>7:30-12:00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
