
const reducer = (state = {
  cartprolistdata: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case "CHANGE_CART_PRO_LIST_DATA":
      const cartprolistdata = { cartprolistdata: data };
      return { ...state, ...cartprolistdata};
    default:
      return state;
  }
}

export default reducer;
