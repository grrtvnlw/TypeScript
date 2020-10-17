import React, { ReactElement, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Catalog from "./Components/Catalog/Catalog";
import Cart from "./Components/Cart/Cart";
import ProductData from "./Interfaces/ProductData";
import CartItemDetail from "./Interfaces/CartItemDetail";

function App(): ReactElement {
  const [addedProducts, setAddedProducts] = useState<
    Map<number, CartItemDetail>
  >(new Map());

  function addedProductsUpdated(product: ProductData): void {
    const cartProductRow: CartItemDetail = {
      productData: product,
      quantity: 1,
    };

    const newProducts = new Map<number, CartItemDetail>();
    newProducts.set(cartProductRow.productData.id, cartProductRow);

    setAddedProducts(newProducts);
  }

  return (
    <div>
      <Header />
      <Catalog onAddedProductsUpdate={addedProductsUpdated} />
      <Cart addedProducts={addedProducts} />
    </div>
  );
}

export default App;
