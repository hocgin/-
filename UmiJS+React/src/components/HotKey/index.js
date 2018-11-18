import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './index.less';
import Key from '../Key';

export default class HotKey extends Component {


    render() {
        return (
            <div className={classNames(this.props.className, styles.hot_key)}>
                <div>
                    {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((i) => {
                        return (
                            <Key className={styles.key} value={`${i}`}/>
                        );
                    })}
                </div>
                <div>
                    {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((i) => {
                        return (
                            <Key className={styles.key} value={`${i}`}/>
                        );
                    })}
                </div>
                <div>
                    {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((i) => {
                        return (
                            <Key className={styles.key} value={`${i}`}/>
                        );
                    })}
                </div>
            </div>
        );
    }
};
