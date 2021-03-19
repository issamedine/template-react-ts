import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { BoutiqueType } from "../../redux/types";
import CardShop from "../../reusables/CardShop";

const RightBloc: React.FC = () => {
  const shopState = useSelector((state: RootStore) => state.boutique);

  console.log("shopState", shopState);
  const [shops, setShops] = useState<BoutiqueType[]>();

  useEffect(() => {
    if (!shopState) return;
    setShops(shopState.boutique);
  }, [shopState]);

  return (
    <div className="wrapper-right-bloc">
      <div className="menu">
        <span>Nouveautés</span>
        <span>Populaire</span>
        <span>Meilleures Ventes</span>
      </div>
      <div className="cards">
        <div className="row">
          {shops &&
            shops.map((el, i) => (
              <div className="col-md-4 col-xs-12" key={i}>
                <div className="mt-3">
                  <CardShop shop={el} />
                </div>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default RightBloc;
