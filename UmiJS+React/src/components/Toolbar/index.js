import React, {Component} from 'react';
import styles from './index.less';

export default class Toolbar extends Component {


    render() {
        return (
            <div className={styles.toolbar}>
                <div className={styles.bg}></div>
                <div className={styles.mask}></div>
                <div className={styles.workspace}>
                    <ul>
                        <li className={styles.active}>
                            <a href="#">默认</a>
                        </li>
                        <li>
                            <a href="#">工作区2</a>
                        </li>
                        <li>
                            <a href="#">工作区3</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};
