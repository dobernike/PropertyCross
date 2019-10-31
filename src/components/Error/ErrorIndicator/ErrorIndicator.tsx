import React from 'react';
import Text from '../../UI/Typography/Text/Text';

type Props = {
    errorMessage: string;
};

const ErrorIndicator = ({ errorMessage }: Props) => {
    return <Text>{errorMessage}</Text>;
};

export default ErrorIndicator;
