import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItem } = useContext(ShopContext);
  const cartItemCount = cartItem(id);
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onclick={() => addToCart(id)}>
        Add to cart {cartItemCount > 0 && <>({cartItemCount})</>}
      </button>
    </div>
  );
};
