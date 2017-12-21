import {DEMO} from '../../constants/demo';

const init = {
    visible: false
};

export const demo =  (state = init, action) => {
    switch (action.type) {
        case DEMO:
            return Object.assign(state,{demo:action.res});
        default:
            return state;

    }
};