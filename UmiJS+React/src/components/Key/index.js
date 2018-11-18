import React, { Component } from 'react';
import styles from './index.less';
import classNames from "classnames";

export default class Key extends Component {


    render() {
        return (
            <div className={classNames(this.props.className, styles.key)}>
                <a href="#">
                    <span>{this.props.value}</span>
                </a>
            </div>
        );
    }
};
