import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

import "./Boutique.scss";
import LeftBloc from "./LeftBloc";
import RightBloc from "./RightBloc";

const Boutique: React.FC = () => {


  return (
    <div className="container">
        <div className="wrapper-boutique">
      <div className="row">
        <div className="col-lg-3  col-sm-12 col-xs-12">
          <div className="left-bloc">
            <LeftBloc />
          </div>
        </div>
        <div className="col-lg-9 col-sm-12 col-xs-12">
          <div className="right-bloc">
            <RightBloc />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Boutique;
