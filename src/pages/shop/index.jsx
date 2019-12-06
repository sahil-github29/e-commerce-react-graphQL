import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview";
import CollectionPage from "../collection";

export default ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};
