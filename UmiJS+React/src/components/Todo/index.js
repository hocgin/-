import React, {Component} from 'react';
import styles from './index.less';
import classNames from "classnames";

export default class TODO extends Component {


    render() {
        return (
            <div className={classNames(this.props.className)}>
                TODO
            </div>
        );
    }
};
