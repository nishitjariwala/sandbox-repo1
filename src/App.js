import { useEffect, useReducer } from "react";
import Cart from "./Components/Cart";
import ShopingCart from "./Components/ShopingCart";
import { productReducer } from "./Reducers/productReducers";
import "./styles.css";

const initState = {
  products: [],
  cartItems: []
};

export default function App() {
  const [state, dispatch] = useReducer(productReducer, initState);
  useEffect(() => {
    // get Products Data
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        dispatch({
          type: "GET_PRODUCTS",
          payload: result
        });
        // console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(state);
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%" }}>
          <ShopingCart
            cartItems={state.cartItems}
            products={state.products}
            dispatch={dispatch}
          />
        </div>
        <div style={{ width: "30%" }}>
          <Cart cartItems={state.cartItems} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}
