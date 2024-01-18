import { common } from "./Common";
import { wizard } from "./Wizard";
import { combineReducers } from "redux";

const allReduces = combineReducers({ common, wizard });

export default allReduces;