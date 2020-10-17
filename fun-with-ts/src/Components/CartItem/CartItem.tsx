import React, { ReactElement } from "react";

import CartItemDetail from "../../Interfaces/CartItemDetail";

import "./CartItem.css";

interface CartItemProps {
  data: CartItemDetail;
}

function CartItem(props: CartItemProps): ReactElement {
  return (
    <div className="CartItem">
      <div>{props.data.productData.name}</div>
    </div>
  );
}

export default CartItem;
