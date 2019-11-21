import React, { ReactNode } from 'react';

const styles = require('./Button.css');

type Props = {
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
    onClick?: () => void;
};

function Button({ type, onClick, children }: Props) {
    return (
        <button className={styles.button} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: 'button',
};

export default Button;
