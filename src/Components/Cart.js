import React, { useEffect, useState } from "react";

const Cart = (props) => {
  const { cartItems, dispatch } = props;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cartItems
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2)
    );
  }, [cartItems]);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h4>Cart</h4>
        <h5>Sub Total: {total}</h5>
      </div>
      {cartItems.map((item) => {
        return <CartItem item={item} key={item.id} dispatch={dispatch} />;
      })}
    </>
  );
};

const CartItem = ({ item, dispatch }) => {
  const onQuantityChange = (qty) => {
    if (qty <= 0) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: item.id
      });
    } else {
      dispatch({
        type: "CHANGE_QUANTITY",
        payload: {
          id: item.id,
          qty
        }
      });
    }
  };
  return (
    <>
      <div style={{ border: "1px solid black", marginTop: 5 }}>
        <div
          style={{
            padding: 5,
            display: "flex"
          }}
        >
          <img
            src={item.image}
            style={{ width: 50, height: 50 }}
            alt={item.title}
          />
          <div style={{ padding: 5 }}>{item.title}</div>
        </div>
        <div
          style={{
            padding: 5,
            display: "flex"
          }}
        >
          <div>{item.price}</div>
          <div style={{ width: "100%", textAlign: "right" }}>
            <button onClick={() => onQuantityChange(--item.quantity)}>-</button>
            <span style={{ padding: 5 }}>{item.quantity}</span>
            <button onClick={() => onQuantityChange(++item.quantity)}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
