import React from "react";
import ShopingcartItem from "./ShopingCartItem";

const ShopingCart = ({ products, dispatch, cartItems }) => {
  return (
    <>
      <h4>Shopping Cart </h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
        {products.map((product) => {
          let isAdded = false;
          if (cartItems.some((item) => item.id == product.id)) isAdded = true;
          return (
            <ShopingcartItem
              isAdded={isAdded}
              dispatch={dispatch}
              product={product}
              key={product.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default ShopingCart;
