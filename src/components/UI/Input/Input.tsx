import React, { ChangeEvent } from 'react';

const styles = require('./Input.css');

type Props = {
    onChange?: React.EventHandler<ChangeEvent>;
    type?: string;
    placeholder?: string;
    value: string;
};

function Input({ onChange, value, type, placeholder }: Props) {
    return <input className={styles.search} onChange={onChange} value={value} type={type} placeholder={placeholder} />;
}

Input.defaultProps = {
    type: 'text',
};

export default Input;
