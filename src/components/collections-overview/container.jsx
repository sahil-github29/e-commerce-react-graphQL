import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import withSpinner from "../with-spinner/index";
import CollectionsOverview from "./index";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

/* 
 =>  if we have multiple HOC, it is difficult to add like show below so
 we are use "compose" from "redeux" which behaves same as curry function.

const CollectionsOverviewContainer = connect(withSpinner(mapStateToProps))(
  CollectionsOverview
); */

/* The code can be written with compose like this with better readability */

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);
export default CollectionsOverviewContainer;
