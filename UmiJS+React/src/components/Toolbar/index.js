import React, {Component} from 'react';
import styles from './index.less';
import {Icon} from 'antd';
import classNames from "classnames";

export default class Toolbar extends Component {


    render() {
        return (
            <div className={classNames(styles.toolbar, this.props.className)}>
                <div className={styles.bg}/>
                <div className={styles.mask}/>
                <div className={styles.content}>
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
                    <div className={styles.todo}>
                       TODO
                    </div>
                </div>
            </div>
        );
    }
};
