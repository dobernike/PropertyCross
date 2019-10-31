import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

type State = {
    hasError: boolean;
};

export default class ErrorBoundary extends Component {
    state: State = {
        hasError: false,
    };

    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

    render() {
        return this.state.hasError ? <ErrorIndicator errorMessage="Error" /> : this.props.children;
    }
}
