import React, { useState } from "react";
import MenuItem from "../menu-time/menu-item.component";
import "./directory.styles.scss";

const sections = [
  {
    title: "hats",
    imageUrl:
      "https://images.freeimages.com/images/large-previews/277/doggy-1382866.jpg",
    id: 1,
  },
  {
    title: "jackets",
    imageUrl: "https://www.freeimages.com/photo/zip-1426414",
    id: 2,
  },
  {
    title: "sneakers",
    imageUrl: "https://www.freeimages.com/photo/sole-1427179",
    id: 3,
  },
  {
    title: "womens",
    imageUrl: "https://www.freeimages.com/photo/laundry-1196263",
    id: 4,
  },
  {
    title: "mens",
    imageUrl: "https://www.freeimages.com/photo/jacket-button-1-1487126",
    id: 5,
  },
];

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id }) => (
        <MenuItem key={id} title={title} />
      ))}
    </div>
  );
};

export default Directory;
