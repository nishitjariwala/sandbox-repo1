import React from "react";

const CustomButton = (props) => {
  const { text, onClick, color } = props;
  return (
    <button
      onClick={onClick}
      style={{
        color: "white",
        background: color
      }}
    >
      {text}
    </button>
  );
};

const ShopingcartItem = ({ product, isAdded, dispatch }) => {
  return (
    <>
      <div
        key={product.id}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          border: "1px solid black",
          gap: 10,
          marginTop: 10
        }}
      >
        <img src={product.image} height={200} alt={product.title} />
        {product.title}
        <div
          style={{
            display: "flex"
          }}
        >
          <div>{product.price}</div>
          <div style={{ width: "100%", textAlign: "right" }}>
            {isAdded ? (
              <CustomButton
                text="Remove from Cart"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product.id
                  });
                }}
                color="red"
              />
            ) : (
              <CustomButton
                text="Add to Cart"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { ...product, quantity: 1 }
                  });
                }}
                color="green"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopingcartItem;
