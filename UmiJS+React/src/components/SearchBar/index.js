import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './index.less';

export default class SearchBar extends Component {
    state = {
        keywords: '11',
        classify: {
            clicked: '全部',
            list: ['全部', '音乐', '图片', '视频']
        }
    };

    constructor(props) {
        super(props);
    }


    renderTabs(tabs, clicked = 0) {
        return tabs.map((tab, i) => {
            return (
                <div key={i} className={classNames(
                    styles.link,
                    {[styles.active]: i === clicked}
                )}>
                    <a href="#">{tab}</a>
                </div>
            );
        });
    }

    renderClassifies() {
        let {classify} = this.state;
        let content = <button key='0' className={styles.drop_btn}>{classify.clicked}</button>;

        let items = (
            <div key='1' className={styles.dropdown_content}>
                {classify.list.map((classify, i) => {
                    return (
                        <a key={i} href="#" onClick={this.handleChooseClassify.bind(this, i)}>{classify}</a>
                    );
                })}
            </div>
        );

        return [content, items]
    }

    handleChooseClassify(i) {
        const {list} = this.state.classify;
        this.setState({
            classify: Object.assign(this.state.classify, {clicked: list[i]})
        });
    }

    render() {
        return (
            <div className={styles.search_bar}>
                <div className={styles.links}>
                    {this.renderTabs(['Google', 'Baidu', 'Yahoo'], 1)}
                </div>
                <div className={styles.text}>
                    <div className={styles.dropdown}>
                        {this.renderClassifies()}
                        {/*<button className={styles.drop_btn}>全部</button>*/}
                        {/*<div className={styles.dropdown_content}>*/}
                        {/*<a href="#">音乐</a>*/}
                        {/*<a href="#">图片</a>*/}
                        {/*<a href="#">视频</a>*/}
                        {/*</div>*/}
                    </div>
                    <input type="text" placeholder="请输入内容"
                           style={{fontSize: "1.03em"}}
                           value={this.state.keywords}
                           onChange={(v) => {
                               this.setState({keywords: v.target.value})
                           }}
                    />
                    <button className={styles.search_btn}>
                            <span className={styles.icon}>
                                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                </svg>
                            </span>
                    </button>
                </div>
            </div>
        );
    }
};