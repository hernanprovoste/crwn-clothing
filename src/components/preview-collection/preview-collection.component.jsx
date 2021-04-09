import React from "react";
import CollectioItem from "../colletion-item/collection-item.component";

import "./preview-collection.styles.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectioItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
