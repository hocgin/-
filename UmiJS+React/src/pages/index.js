import styles from './index.css';
import Link from 'umi/link';
import SearchBar from '../components/SearchBar';
import Redirect from 'umi/redirect';
import React from "react";

export default function () {
    return (
        <div className={styles.normal}>
            <SearchBar/>
        </div>
    );
}
