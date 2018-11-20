import styles from './index.less';
import SearchBar from '../components/SearchBar';
import Toolbar from '../components/Toolbar';
import Card from '../components/Card';
import HotKey from '../components/HotKey';
import React, {Component} from "react";
import {Col, Icon, Row} from 'antd';


export default class Page extends Component {

    state = {
        egg: false
    };


    componentDidMount() {
        window.addEventListener('scroll', this._onScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    _onScroll(e) {
        return;
        if (window.scrollY <= 0) {
            this.setState({egg: true});
        } else if (window.scrollY > 0 && this.state.egg) {
            this.setState({egg: false}, () => {
                window.scrollTo(0, 0);
            });
        }
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
                        <div className={styles.content_container}>
                            <div className={styles.title}>
                                <h3>推荐</h3>
                            </div>
                            <Row>
                                {
                                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                                        return (
                                            <Col xl={4} className={styles.item}>
                                                <Card/>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
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
