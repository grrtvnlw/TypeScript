import React, { ReactElement } from "react";
import CartItemDetail from "../../Interfaces/CartItemDetail";
import CartItem from "../CartItem/CartItem";

import "./Cart.css";

interface CartProps {
  addedProducts: Map<number, CartItemDetail>;
}

function Cart(props: CartProps): ReactElement {
  function generateCartItems(): ReactElement[] {
    const products: ReactElement[] = [];
    props.addedProducts.forEach((cartItem: CartItemDetail, id: number) => {
      products.push(<CartItem key={id} data={cartItem} />);
    });
    return products;
  }
  return (
    <div className="Cart">
      <h5> My Cart </h5>
      <div className="cart-item">{generateCartItems()}</div>
      <div>Order Summary:</div>
    </div>
  );
}

export default Cart;
