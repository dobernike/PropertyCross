import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

    render() {
        return this.state.hasError ? <ErrorIndicator /> : this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
