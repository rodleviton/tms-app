import React from 'react';
import { Link } from 'react-router';
import styles from './Navbar.scss';

type Props = {

};

export class Navbar extends React.Component {
  props: Props;

  render () {
    return (
      <div className={styles.default}>
        <ul className={styles.nav}>
          <li>
            <Link to='/'>Discover</Link>
          </li>
          <li>
            <Link to='/project/56efe19baea98df90a528653/land-rover-defender-camel-trophy-build-diary'>Project</Link>
          </li>
          <li>
            <Link to='/project/56efe19baea98df90a528654/project-2'>Network</Link>
          </li>
          <li>
            <Link to='/project/56efe19baea98df90a528655/project-3'>Channels</Link>
          </li>
          <li>
            <Link to='/project/56efe19baea98df90a528656/project-4'>Activity</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
