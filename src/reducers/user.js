
const initialState = {
  user:{}
};

export default function (state = initialState, action = {}){
    switch (action.type) {
      case "USER_FETCH_SUCCEEDED":
        return state
      default:
        return state
    }
  };