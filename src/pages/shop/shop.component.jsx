import React from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection.component.jsx";

import SHOP_DATA from "./shop.data.js";

const collection = SHOP_DATA;

const ShopPage = (props) => {
  return (
    <div className="shop-page">
      {collection.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
