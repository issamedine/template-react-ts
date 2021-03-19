import React from 'react'

import './FirstBloc.scss'

import Card from "../../reusables/Card";

import lameComposite from "../../assets/imgs/lame-composite.png";
import lameBois from "../../assets/imgs/lame-bois.png";
import panneauBois from "../../assets/imgs/panneau-bois.png";
import grilleRigide from "../../assets/imgs/grille-rigide.png";
import gabion from "../../assets/imgs/gabion.png";

const FirstBloc = () => {

    const composite = (
        <p>
          Lame <br /> composite
        </p>
      );
      const lameBoisTxt = (
        <p>
          Lame <br /> en bois
        </p>
      );
      const panneau = (
        <p>
          Panneau <br /> bois
        </p>
      );
      const grille = (
        <p>
          Grille <br />
          rigide
        </p>
      );
      const gabionTxt = <p>Gabion</p>;

    return (
        <div className="wrapper-card container">
        <Card itemCard="item-card" img={lameComposite} title={composite} />
        <Card itemCard="item-card" img={lameBois} title={lameBoisTxt} />
        <Card itemCard="item-card" img={panneauBois} title={panneau} />
        <Card itemCard="item-card" img={grilleRigide} title={grille} />
        <Card itemCard="item-card" img={gabion} title={gabionTxt} />
      </div>
    )
}

export default FirstBloc