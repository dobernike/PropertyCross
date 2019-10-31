import React, { ReactNode } from 'react';

const styles = require('./Layout.css');

type Props = {
    children: ReactNode;
};

function Layout({ children }: Props) {
    return <main className={styles.container}>{children}</main>;
}

export default Layout;
