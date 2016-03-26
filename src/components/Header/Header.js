import React from 'react';
import styles from './Header.scss';

type Props = {

};

export class Header extends React.Component {
  props: Props;

  render () {
    return (
      <div className={styles.default}>
        <a className={styles.logo}>
          <svg width='56px' height='66px' viewBox='0 0 56 66' version='1.1'>
              <defs></defs>
              <g id='Article' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                  <g id='Article-01' transform='translate(-30.000000, -12.000000)' stroke-width='3' stroke='#484848'>
                      <g id='Group' transform='translate(31.000000, 14.000000)'>
                          <polygon id='Polygon-2-Copy' points='26.9639057 0.276328987 53.3324537 15.5399249 53.3324537 46.0671167 26.9639057 61.3307126 0.595357613 46.0671167 0.595357613 15.5399249 '></polygon>
                      </g>
                  </g>
              </g>
          </svg>
        </a>
        <div className={styles['user-actions']}>
          <button className='btn-default vertical-align'>Login <i className='icon-plus'></i></button>
        </div>
      </div>
    );
  }
}

export default Header;

