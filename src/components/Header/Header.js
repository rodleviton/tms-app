import React from 'react';
import { connect } from 'react-redux';
import styles from './Header.scss';
import { updateLayout } from '../../redux/modules/layout';

type Props = {
  updateLayout: Function,
};

export class Header extends React.Component < void, Props, void > {
  props: Props;

  componentDidMount() {
    const el = document.getElementById('header');
    const elHeight = el ? el.offsetHeight : 0;
    this.props.updateLayout('header', { height: elHeight });
  }

  componentWillUpdate() {
    // TODO
    // Optimize call to only update if height is different to previous value
    const el = document.getElementById('header');
    const elHeight = el ? el.offsetHeight : 0;
    this.props.updateLayout('header', { height: elHeight });
  }

  render() {
    return (
      <header id='header' className={styles.default}>
        <a className={styles.logo}>
          <svg width='56px' height='66px' viewBox='0 0 56 66' version='1.1'>
            <defs></defs>
            <g id='Article' stroke='none' strokeWidth='1' fill='none' fill-rule='evenodd'>
              <g id='Article-01' transform='translate(-30.000000, -12.000000)' strokeWidth='3' stroke='#484848'>
                <g id='Group' transform='translate(31.000000, 14.000000)'>
                  <polygon id='Polygon-2-Copy'
                    points='26.9639057 0.276328987 53.3324537 15.5399249 53.3324537 46.0671167 26.9639057 61.3307126 0.595357613 46.0671167 0.595357613 15.5399249 '>
                  </polygon>
                </g>
              </g>
            </g>
          </svg>
        </a>
        <div className={styles['user-actions']}>
          <button className='btn-default vertical-align'>Login <i className='icon-plus'></i></button>
        </div>
      </header>

    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps, { updateLayout })(Header);
