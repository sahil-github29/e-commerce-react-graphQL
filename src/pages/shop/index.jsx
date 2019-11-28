import React, { Component } from "react";
import ShopData from "./shopData";
import CollectionPreview from "../../components/collection-preview";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}
