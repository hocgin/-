import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './index.less';
import Key from '../Key';

export default class HotKey extends Component {

    state = {
        keys: [
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
            ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
        ]
    };


    render() {
        return (
            <div className={classNames(this.props.className, styles.hot_key)}>
                {this.state.keys.map((item) => {
                    return (
                        <div>
                            {item.map((i) => {
                                return (
                                    <Key className={styles.key} value={`${i}`}/>
                                );
                            })}
                        </div>
                    )
                })}
            </div>
        );
    }
};
