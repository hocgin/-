import React, { Component } from 'react';
import styles from './index.less';

export default class Card extends Component {


    render() {
        return (
          <div className={styles.card}>
            <div className={styles.header}></div>
            <div className={styles.body}>
              <div className={styles.image} style={{backgroundImage: "url('https://klart.io/api/pixels/5bebbe72a9517e2d7fc554ff/thumb.png')"}}></div>
            </div>
            <div className={styles.footer}>
              <a className={styles.tag} href="#标签">标签</a>
            </div>
          </div>
        );
    }
};
