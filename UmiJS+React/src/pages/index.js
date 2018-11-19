import styles from './index.less';
import SearchBar from '../components/SearchBar';
import Toolbar from '../components/Toolbar';
import Card from '../components/Card';
import HotKey from '../components/HotKey';
import Todo from '../components/Todo';
import React from "react";
import {Icon, Row, Col} from 'antd';
import ReactFullpage from '@fullpage/react-fullpage';


function section1() {
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

export default function () {
    // return (
    //     // OPEN-SOURCE-GPLV3-LICENSE
    //     <ReactFullpage
    //
    //         render={({state, fullpageApi}) => {
    //             return (
    //                 <ReactFullpage.Wrapper>
    //                     <div className="section">
    //                         <p>Section 2</p>
    //                     </div>
    //                     <div className="section">
    //                         {section1()}
    //                     </div>
    //                 </ReactFullpage.Wrapper>
    //             );
    //         }}
    //     />
    // );
    return (
        <div style={{
            transform: 'translate3d(0px, -100vh, 0px)',
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
            <div>
                {section1()}
            </div>
        </div>
    )
}
