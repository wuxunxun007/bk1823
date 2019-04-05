const reducer = (state = {
  homebannerlistdata: [1, 2, 3],
  homeprolistdata: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case "CHANGE_HOME_BANNER_LIST_DATA":
      const homebannerlistdata = { homebannerlistdata: data };
      return { ...state, ...homebannerlistdata};
      case "CHANGE_HOME_PRO_LIST_DATA":
      const homeprolistdata = { homeprolistdata: data };
      return { ...state, ...homeprolistdata};
    default:
      return state;
  }
}

export default reducer;
