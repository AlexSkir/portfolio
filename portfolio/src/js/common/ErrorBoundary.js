/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';
import PageWrapper from '../Layout/PageWrapper';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.error) {
      // Error path
      return (
        <>
          <PageWrapper title="Error">
            <div>
              <Typography variant="h3">Something went wrong!</Typography>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {typeof this.state.errorInfo !== 'undefined'
                  ? this.state.errorInfo.componentStack
                  : ''}
              </details>
              <button
                className="not-found__button MyTypography MyTypography-button"
                type="button"
                style={{ margin: '20px 0' }}
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => window.location.reload()
                }
              >
                <Typography variant="h4">Try again</Typography>
              </button>
            </div>
          </PageWrapper>
        </>
      );
    }
    console.log('nothing');
    // Normally, just render children
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
