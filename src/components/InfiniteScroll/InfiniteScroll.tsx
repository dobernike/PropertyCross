import React, { Component } from 'react';
import throttle from '../../utils/throttle';

type Props = {
    hasMore: boolean;
    loadMore: Function;
};

class InfiniteScroll extends Component<Props> {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = throttle(() => {
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

        if (windowBottom >= docHeight && this.props.hasMore) {
            this.props.loadMore();
        }
    }, 500);

    render() {
        return <>{this.props.children}</>;
    }
}

export default InfiniteScroll;
