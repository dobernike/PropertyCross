import React, { Component } from 'react';
import PropTypes from 'prop-types';

import throttle from '../../utils/throttle';

class InfiniteScroll extends Component {
    componentDidMount() {
        window.addEventListener('scroll', throttle(this.handleScroll, 500));
    }

    handleScroll = () => {
        const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
        const { body } = document;
        const html = document.documentElement;
        const docHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        const windowBottom = Math.ceil(windowHeight + window.pageYOffset);

        if (windowBottom >= docHeight) {
            if (this.props.hasMore) {
                this.props.loadMore();
            }
        }
    };

    render() {
        return <>{this.props.children}</>;
    }
}

InfiniteScroll.propTypes = {
    hasMore: PropTypes.bool.isRequired,
    loadMore: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default InfiniteScroll;
