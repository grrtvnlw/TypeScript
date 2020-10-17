import React, { ReactElement } from "react";

import ProductData from "../../Interfaces/ProductData";

import "./Product.css";

interface ProductProps {
  data: ProductData;
  addToCartCallback: (data: ProductData) => void;
}

function Product(props: ProductProps): ReactElement {
  function addProduct(): void {
    props.addToCartCallback(props.data);
  }

  return (
    <div className="Product">
      <img
        src={process.env.PUBLIC_URL + props.data.imageSource}
        alt={props.data.name}
        width={100}
        height={100}
      />
      <br />
      {props.data.name}
      <br />
      {props.data.price}
      <br />
      {props.data.description}
      <button onClick={addProduct}>Add to Cart</button>
    </div>
  );
}

export default Product;
