import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Text.css';

function Text({ bold, center, fontSizeMiddle, children }) {
    return (
        <p
            className={cx(styles.text, {
                [styles.bold]: bold,
                [styles.center]: center,
                [styles.fontSizeMiddle]: fontSizeMiddle,
            })}
        >
            {children}
        </p>
    );
}

Text.propTypes = {
    bold: PropTypes.bool,
    center: PropTypes.bool,
    fontSizeMiddle: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Text;
