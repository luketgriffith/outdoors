/**
*
* Header
*
*/

import React from 'react';

import styles from './styles.css';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
                <li><a href="#">Other Link</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
