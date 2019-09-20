import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../UI/Typography/Text/Text';

const ErrorIndicator = (props) => {
    return <Text>{props.errorMessage}</Text>;
};

ErrorIndicator.propTypes = {
    errorMessage: PropTypes.string,
};

export default ErrorIndicator;
