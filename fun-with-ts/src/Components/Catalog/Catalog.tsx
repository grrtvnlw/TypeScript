import React, { ReactElement, useState, useEffect } from "react";

import Product from "../Product/Product";
import ProductData from "../../Interfaces/ProductData";

import "./Catalog.css";

interface CatalogProps {
  onAddedProductsUpdate: (products: ProductData) => void;
}

function Catalog(props: CatalogProps): ReactElement {
  const [productData, setProductData] = useState<ProductData[]>([]);
  const [addedProducts, setAddedProducts]: [ProductData[], Function] = useState<
    ProductData[]
  >([]);

  useEffect(() => {
    const apiUrl: string = "http://localhost:4000/products";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  }, [addedProducts]);

  function productButtonClicked(product: ProductData): void {
    addedProducts.push(product);
    setAddedProducts(addedProducts);
    props.onAddedProductsUpdate(product);
  }

  return (
    <div className="Catalog col=9">
      <div className="contents">
        {/* <Product data={productData} /> */}
        {productData.map((data: ProductData) => (
          <Product
            key={data.id}
            data={data}
            addToCartCallback={productButtonClicked}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
