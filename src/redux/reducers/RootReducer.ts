import { combineReducers } from "redux";
import BoutiqueReducer from "./BoutiqueReducer";

const RootReducer = combineReducers({
  boutique: BoutiqueReducer,
});

export default RootReducer;
