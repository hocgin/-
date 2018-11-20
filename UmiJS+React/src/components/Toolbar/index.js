import React, {Component} from 'react';
import styles from './index.less';
import {Icon} from 'antd';
import classNames from "classnames";

export default class Toolbar extends Component {

    state = {
        workspace: {
            selected: 0,
            all: ['默认', '工作区1', '工作区2']
        }
    };

    _onClickPlus() {
        const {workspace} = this.state;
        const number = workspace.all.length+1;
        if (number > 5) {
            return;
        }
        workspace.all.push(`工作区${number}`);
        this.setState({
            workspace: Object.assign(workspace, {all: workspace.all})
        });
    }

    _onClickWorkspace(i) {
        this.setState({
            workspace: Object.assign(this.state.workspace, {selected: i})
        });
    }

    _onDoubleClick(i) {

    }

    _onScroll(e) {
        console.log('..');
    }

    render() {
        return (
            <div className={classNames(styles.toolbar, this.props.className)}>
                <div className={styles.bg}/>
                <div className={styles.mask}/>
                <div className={styles.content}>
                    <div className={styles.workspace}>
                        <ul>
                            {
                                this.state.workspace.all.map((v, i) => {
                                    const {selected} = this.state.workspace;
                                    return (
                                        <li className={classNames({[styles.active]: i === selected})}
                                            onClick={this._onClickWorkspace.bind(this, i)}
                                            onDoubleClick={this._onDoubleClick.bind(this, i)}
                                        >
                                            <a href="#">{v}</a>
                                        </li>
                                    );
                                })
                            }
                            <li
                                onClick={this._onClickPlus.bind(this)}>
                                <a href="#">
                                    <Icon
                                        style={{fontSize: '1.2em'}}
                                        type="plus"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.todo}>
                        TODO <Icon type="pushpin" theme="filled"/>
                    </div>
                </div>
            </div>
        );
    }
};
