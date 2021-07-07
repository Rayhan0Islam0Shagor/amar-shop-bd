import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => (
    <div className={styles.notfound}>
        <Link to="/" className={styles.goHome}>
            Home
        </Link>
    </div>
);

export default NotFoundPage;
