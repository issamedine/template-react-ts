import React from "react";
import Card from "../../reusables/Card";

import installation1 from "../../assets/imgs/installation1.png";
import installation2 from "../../assets/imgs/installation2.png";
import installation3 from "../../assets/imgs/installation3.png";
import installation4 from "../../assets/imgs/installation4.png";
import installation5 from "../../assets/imgs/installation5.png";

const Installation: React.FC = () => {
  const titleDesc = (
    <div className="wrapper-text-install-card">
      <p className="title-text-install-card">
        Notice <br /> & Installation
      </p>
      <p className="desc-text-install-card">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
        tempora.
      </p>
    </div>
  );
  return (
    <div className="wrapper-installation container">
      <div className="row">
        <div className="col-md-4 col-xs-12 ">
          <Card title={titleDesc} install />
        </div>
        <div className="col-md-4 col-xs-12 ">
          <Card img={installation1} />
        </div>
        <div className="col-md-4 col-xs-12 ">
          <Card img={installation2} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4 col-xs-12  custom-m-t">
          <Card img={installation3} />
        </div>
        <div className="col-md-4 col-xs-12 ">
          <Card img={installation4} />
        </div>
        <div className="col-md-4 col-xs-12 ">
          <Card img={installation5} />
        </div>
      </div>
    </div>
  );
};

export default Installation;
