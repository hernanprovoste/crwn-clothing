import React, { useState } from "react";
import MenuItem from "../menu-time/menu-item.component";
import "./directory.styles.scss";

const sections = [
  {
    title: "hats",
    imageUrl:
      "https://images.freeimages.com/images/large-previews/277/doggy-1382866.jpg",
    id: 1,
    linkUrl: "hats",
  },
  {
    title: "jackets",
    imageUrl:
      "https://images.freeimages.com/images/large-previews/85f/zip-1426414.jpg",
    id: 2,
    linkUrl: "",
  },
  {
    title: "sneakers",
    imageUrl:
      "https://images.freeimages.com/images/large-previews/bd5/sole-1427179.jpg",
    id: 3,
    linkUrl: "",
  },
  {
    title: "womens",
    imageUrl:
      "https://images.freeimages.com/images/large-previews/81d/laundry-1196263.jpg",
    size: "large",
    id: 4,
    linkUrl: "",
  },
  {
    title: "mens",
    imageUrl:
      "https://images.freeimages.com/images/large-previews/c90/jacket-button-1-1487126.jpg",
    size: "large",
    id: 5,
  },
];

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
