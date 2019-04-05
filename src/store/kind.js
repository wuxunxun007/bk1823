
const reducer = (state = {
  kindprolistdata: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case "CHANGE_KIND_PRO_LIST_DATA":
      const kindprolistdata = { kindprolistdata: data };
      return { ...state, ...kindprolistdata};
    default:
      return state;
  }
}

export default reducer;
