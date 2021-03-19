import { type } from "node:os";

export const BOUTIQUE_LOADING = "BOUTIQUE_LOADING";
export const BOUTIQUE_FAIL = "BOUTIQUE_FAIL";
export const BOUTIQUE_SUCCESS = "BOUTIQUE_SUCCESS";

export type BoutiqueType = {
  id: number,
  price: string,
  picture: string,
  product_name: string
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};
export type PokemonSprites = {
  front_default: string;
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export interface BoutiqueLoading {
  type: typeof BOUTIQUE_LOADING;
}
export interface BoutiqueFail {
  type: typeof BOUTIQUE_FAIL;
}
export interface BoutiqueSucess {
  type: typeof BOUTIQUE_SUCCESS;
  payload: BoutiqueType[] | undefined
}

export type BoutiqueDispatchTypes = BoutiqueLoading | BoutiqueFail | BoutiqueSucess;
