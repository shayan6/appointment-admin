import { common } from "./Common";
import { wizard } from "./Wizard";
import { turbolog } from "./TurboLog";
import { combineReducers } from "redux";

const allReduces = combineReducers({ common, wizard, turbolog });

export default allReduces;