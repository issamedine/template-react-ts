import React, { useState } from "react";
import "./home.scss";

import ConfigureEspace from "./ConfigureEspace";
import Achievements from "./Achievements";
import Installation from "./Installation";
import OurShop from "./OurShop";
import FirstBloc from "../FirstBloc";

const Home = () => {
  
  return (
    <>
      <FirstBloc />
      <div className="wapper-home">
        <ConfigureEspace />
        <Achievements />
        <Installation />
        <OurShop />
      </div>
    </>
  );
};

export default Home;
