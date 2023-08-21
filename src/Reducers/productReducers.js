export const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id != action.payload)
      };
    case "CHANGE_QUANTITY":
      const { id, qty } = action.payload;
      console.log("here");
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id == id) {
            item.quantity = qty;
          }
          return item;
        })
      };
    default:
      return state;
  }
};
