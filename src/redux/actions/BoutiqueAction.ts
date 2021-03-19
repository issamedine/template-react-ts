import { Dispatch } from "redux";
import {
  BOUTIQUE_LOADING,
  BOUTIQUE_FAIL,
  BOUTIQUE_SUCCESS,
  BoutiqueDispatchTypes,
} from "../types";
import axios from "axios";



export const GetBoutique = () => async (
  dispatch: Dispatch<BoutiqueDispatchTypes>
) => {
  try {
    dispatch({
      type: BOUTIQUE_LOADING,
    });

    const res = await axios.get(`https://api.mocki.io/v1/af37df01`);

    dispatch({
      type: BOUTIQUE_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: BOUTIQUE_FAIL,
    });
  }
};
