import React, {Component} from 'react';
import router from 'umi/router';
import classNames from 'classnames';
import styles from './index.less';

export default class SearchBar extends Component {
    state = {
        keywords: '',
        tab: {
            selected: 0,
            options: [{
                name: 'Google',
                classify: {
                    selected: 0,
                    options: [{
                        name: '全部',
                        link: 'https://www.google.com/search?q='
                    }, {
                        name: '图片',
                        link: 'https://www.google.com/search?tbm=isch&q='
                    }, {
                        name: '视频',
                        link: 'https://www.google.com/search?tbm=vid&q='
                    }, {
                        name: '新闻',
                        link: 'https://www.google.com/search?tbm=nws&q='
                    }]
                }
            }, {
                name: 'Bing',
                classify: {
                    selected: 0,
                    options: [{
                        name: '国际',
                        link: 'https://www.google.com/search?ensearch=1&q='
                    }, {
                        name: '国内',
                        link: 'https://www.google.com/search?q='
                    }]
                }
            }, {
                name: 'Baidu',
                classify: {
                    selected: 0,
                    options: [{
                        name: '全部',
                        link: 'https://www.baidu.com/s?wd='
                    }, {
                        name: '知道',
                        link: 'https://zhidao.baidu.com/search?ct=17&word='
                    }, {
                        name: '图片',
                        link: 'http://image.baidu.com/search/index?ct=201326592&word='
                    }, {
                        name: '视频',
                        link: 'https://wenku.baidu.com/search?lm=0&word='
                    }]
                }
            }, {
                name: '淘宝',
                classify: {
                    selected: 0,
                    options: [{
                        name: '全部',
                        link: 'https://s.taobao.com/search?q='
                    }]
                }
            }, {
                name: '搜狗',
                classify: {
                    selected: 0,
                    options: [{
                        name: '全部',
                        link: 'https://www.sogou.com/web?query='
                    }, {
                        name: '图片',
                        link: 'https://pic.sogou.com/pics?query='
                    }, {
                        name: '微信',
                        link: 'https://weixin.sogou.com/weixin?query='
                    }, {
                        name: '知乎',
                        link: 'https://zhihu.sogou.com/zhihu?query='
                    }]
                }
            }]
        }
    };

    constructor(props) {
        super(props);
    }


    renderTabs() {
        const {options, selected} = this.state.tab;

        return options.map(option => {
            return option.name;
        }).map((name, i) => {
            return (
                <div key={i} className={classNames(
                    styles.link,
                    {[styles.active]: i === selected}
                )}>
                    <a href="#" onClick={this.handleChooseEngine.bind(this, i)}>{name}</a>
                </div>
            );
        });
    }

    renderClassifies() {
        let tab = this.state.tab;
        let {options, selected} = tab.options[tab.selected].classify;
        let content = (
            <button key='0' className={classNames(styles.drop_btn)}>
                <div className={classNames({'opacity': true})}>{options[selected].name}</div>
            </button>
        );

        let items = options.length > 1 && (
            <div key='1' className={styles.dropdown_content}>
                {
                    options.map(option => option.name)
                        .map((name, i) => {
                            return (
                                <a key={i} href="#" onClick={this.handleChooseClassify.bind(this, i)}>{name}</a>
                            );
                        })
                }
            </div>
        );

        return [content, items]
    }

    render() {
        return (
            <div className={styles.search_bar}>
                <div className={styles.links}>
                    {this.renderTabs()}
                </div>
                <div className={styles.text}>
                    <div className={styles.dropdown}>
                        {this.renderClassifies()}
                    </div>
                    <input type="text"
                           placeholder="请输入内容"
                           style={{fontSize: "1.03em"}}
                           value={this.state.keywords}
                           onChange={(v) => {
                               this.setState({keywords: v.target.value});
                           }}
                           autoFocus
                    />
                    <button className={styles.search_btn} onClick={this.handleSearch.bind(this)}>
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

    /**
     * ########################################
     *                  绑定事件
     * ########################################
     */
    handleChooseClassify(i) {
        let {options, selected} = this.state.tab;
        this.setState({
            [options[selected].classify]: Object.assign(options[selected].classify, {
                selected: i
            })
        });
    }

    handleChooseEngine(i) {
        this.setState({
            tab: Object.assign(this.state.tab, {selected: i})
        });
    }

    handleSearch() {
        const tab = this.state.tab,
            {options, selected} = tab.options[tab.selected].classify;
        const q = this.state.keywords;
        if (q.length === 0) {
            return;
        }
        window.location.href = `${options[selected].link}${q}`;
    }
};
