import {
  BoutiqueDispatchTypes,
  BoutiqueType,
  BOUTIQUE_LOADING,
  BOUTIQUE_FAIL,
  BOUTIQUE_SUCCESS,
} from "../types";

interface DefaultStateI {
  loading: boolean;
  boutique?: BoutiqueType[] | undefined;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const boutiqueReducer = (
  state: DefaultStateI = defaultState,
  action: BoutiqueDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case BOUTIQUE_FAIL:
      return {
        loading: false,
      };
    case BOUTIQUE_LOADING:
      return {
        loading: true,
      };
    case BOUTIQUE_SUCCESS:
      return {
        loading: false,
        boutique: action.payload,
      };

    default:
      return state;
  }
};

export default boutiqueReducer;
