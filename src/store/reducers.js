import * as actionsType from "./actionsType";

// 默认值
const initialState = {
  lists: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_DATALISTS:
      return {
        ...state,
        lists: action.data
      };
    default:
      return state;
  }
};
