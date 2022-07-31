import { Component } from 'react';

export class RenderProp extends Component {
  state = { hasError: false, error: null };

  componentDidCatch(error) {
    this.setState({ hasError: true, error });
  }

  render() {
    const { hasError, error } = this.state;
    const { children, renderProp } = this.props;

    if (hasError) {
      return renderProp();
    }

    return children;
  }
};