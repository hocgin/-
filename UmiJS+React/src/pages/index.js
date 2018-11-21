import styles from './index.less';
import SearchBar from '../components/SearchBar';
import Toolbar from '../components/Toolbar';
import Card from '../components/Card';
import HotKey from '../components/HotKey';
import classNames from 'classnames';
import React, {Component} from "react";
import {Col, Icon, Row} from 'antd';


export default class Page extends Component {

    state = {
        egg: false,
        site: [{
            name: '推荐',
            link: [{
                title: '百度1',
                url: 'http://www.baidu.com'
            }, {
                title: '百度2',
                url: 'http://www.baidu.com'
            }, {
                title: '百度3',
                url: 'http://www.baidu.com'
            }, {
                title: '百度4',
                url: 'http://www.baidu.com'
            }, {
                title: '百度5',
                url: 'http://www.baidu.com'
            }, {
                title: '百度6',
                url: 'http://www.baidu.com'
            }]
        }, {
            name: '推荐2',
            link: [{
                title: '百度2',
                url: 'http://www.baidu.com'
            }]
        }]
    };


    componentDidMount() {
        window.addEventListener('scroll', this._onScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    _onScroll(e) {
        return; // TODO 暂时禁用
        if (window.scrollY <= 0) {
            this.setState({egg: true});
        } else if (window.scrollY > 0 && this.state.egg) {
            this.setState({egg: false}, () => {
                window.scrollTo(0, 0);
            });
        }
    }

    _onDrop(i, i2, e) {
        e.preventDefault();
        const {site} = this.state;
        const ei = e.dataTransfer.getData('i');
        const ei2 = e.dataTransfer.getData('i2');
        let link = site[i].link;
        link = link.splice(i2, 1, ...link.splice(ei2, 1, link[i2]));

        console.log('link', link);
        this.setState({
            [site[i]]: Object.assign([site[i]], {link: link})
        });
        console.log('_onDrop-->', arguments)
    }

    _onDragStart(i, i2, e) {
        console.log(e.dataTransfer);
        e.dataTransfer.setData('i', i);
        e.dataTransfer.setData('i2', i2);
        console.log('-->', i)
    }

    _onDragLeave(e) {
        // if (e.target.className.indexOf('dropping') !== -1) {
        //     e.target.className = styles.dropped;
        // }
    }

    _onDragOver(e) {
        e.preventDefault();
        // console.log('onDragOver-->', arguments)
    }

    _onDragEnter(e) {
        // if (e.target.className.indexOf('dropped') !== -1) {
        //     console.log('dropped', e);
        //     e.target.className = styles.dropping;
        // }
        // console.log('onDragEnter-->', arguments)
    }

    egg() {
        const {egg} = this.state;
        return `translate3d(0px, ${egg ? '0vh' : '-100vh'}, 0px)`;
    }

    render() {
        return (
            <div style={{
                transform: this.egg(),
                transition: 'all 700ms ease 0s',
                position: 'absolute',
                width: '100%',
                touchAction: 'none'
            }}>
                <div style={{
                    height: '100vh',
                    backgroundColor: 'gray'
                }}>1
                </div>
                <div onClick={this.handleClick.bind(this)}>
                    {this.renderSection1()}
                </div>
            </div>
        );
    }

    handleClick() {
        // window.scrollTo(0, 0);
        // this.setState({h: '0vh'});
    }

    /**
     * 渲染频道
     * @returns {any[]}
     * @private
     */
    _renderSite() {
        const {site} = this.state;
        console.log(site);
        return site.map((v, i) => {
            return (
                <div className={styles.content_container}>
                    <div className={styles.title}>
                        <h3>{v.name}</h3>
                    </div>
                    <Row>
                        {v.link.map((v2, i2) => {
                            return (
                                <Col xl={4} className={classNames(styles.item)}
                                     draggable={true}
                                     onDragStart={this._onDragStart.bind(this, i, i2)}
                                     onDrop={this._onDrop.bind(this, i, i2)}
                                     onDragLeave={this._onDragLeave.bind(this)}
                                     onDragOver={this._onDragOver.bind(this)}
                                     onDragEnter={this._onDragEnter.bind(this)}
                                >
                                    <Card tag={v2.title}/>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            )
        });
    }

    renderSection1() {
        return (
            <div className={styles.normal}>
                <Toolbar className={styles.toolbar}/>
                <div className={styles.header}>
                    <SearchBar className={styles.search_bar}/>
                    <HotKey className={styles.hot_key}/>
                </div>
                <div className={styles.body}>
                    <div className={styles.site}>
                        {
                            this._renderSite()
                        }
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.footer_outer}>
                        <div className={styles.footer_inner}>
                            © 2018
                            <Icon className="heartbeat" type="heart" theme="filled"
                                  style={{color: '#F22E3C', margin: '0 5px'}}/>
                            <a className="me" href="https://hocg.in" target="_blank">hocgin</a>.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
