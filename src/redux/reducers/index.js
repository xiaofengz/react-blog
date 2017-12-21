import {combineReducers} from 'redux';

import dialog from "./dialog";
import {demo} from "./demo";

const reducers = {
    demo
};

export default combineReducers(reducers);