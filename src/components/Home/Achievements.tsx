import React from "react";

import achivementImg from "../../assets/imgs/achivement-img.png";

const Achievements = () => {
  return (
    <div className="achivements container">
      <div className="bloc-text-container">
        <p className="title-achivement">Nos realisations</p>
        <div className="bloc-text">
          <p className="subtitle">Panneau bois</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            tempora, doloremque beatae sequi ducimus veritatis, enim assumenda
            mollitia corrupti ut dignissimos ex. Quidem reprehenderit itaque nam
            voluptatem maiores, tenetur veniam!
          </p>
          <div className="pagination">
            <i className="fas fa-arrow-left"></i>
            <div className="pages">
              <i className="far fa-circle"></i>
              <i className="far fa-circle"></i>
              <i className="far fa-circle"></i>
            </div>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="bloc-img">
        <img src={achivementImg} alt="" />
      </div>
    </div>
  );
};

export default Achievements;
