import React from "react";

export default (WrappedComponent, dataSource) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: []
      };
    }
    componentDidMount() {
      fetch(dataSource)
        .then(res => res.json())
        .then(data => this.setState({ data: data.slice(0, 3) }));
    }
    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  }
  return WithData;
};
