import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
/* import CollectionsOverviewContainer from "../../components/collections-overview/container";
import CollectionPageContainer from "../collection/container"; */
import Spinner from "../../components/spinner";

const CollectionPageContainer = lazy(() => import("../collection/container"));
const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/container")
);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          />
          <Route
            exact
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionsLoaded
});

export default connect(mapStateToProps, { fetchCollectionsStart })(Shop);
