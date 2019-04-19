import * as actionsType from "./actionsType";

// action也是函数
export function getDataLists(data) {
  return (dispatch, getState) => {
    dispatch({ type: actionsType.GET_DATALISTS, data });
  };
}
