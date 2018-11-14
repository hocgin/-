import styles from './index.css';
import Link from 'umi/link';
import SearchBar from '../components/SearchBar';
import Redirect from 'umi/redirect';

export default function () {
    return (
        <div className={styles.normal}>
            <SearchBar></SearchBar>
            <br/>
            <br/>
            <br/>
            <ul className={styles.list}>
                <Link to={`/test`}>测试</Link>
                <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
                <li><a href="https://umijs.org/guide/getting-started.html">Getting Started</a></li>
            </ul>
        </div>
    );
}
