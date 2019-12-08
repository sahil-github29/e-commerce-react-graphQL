import React from "react";
import "./index.scss";
import CollectionItem from "../collection-item";
import { Link } from "react-router-dom";

export default ({ title, items, routeName }) => (
  <div className="collection-preview">
    <Link to={`shop/${routeName}`}>
      <h1 className="title">{title.toUpperCase()}</h1>
    </Link>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
