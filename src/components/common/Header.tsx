import Link from 'next/link';
import React, { ReactElement } from 'react';
import { EDIT_PAGE, HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE, SETTINGS_PAGE } from 'src/consts/route';

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href={HOME_PAGE}>
          <a className="navbar-brand">conduit</a>
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link href={HOME_PAGE}>
              <a className="nav-link active">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={EDIT_PAGE}>
              <a className="nav-link">
                <i className="ion-compose"></i>&nbsp;New Article
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={SETTINGS_PAGE}>
              <a className="nav-link">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={LOGIN_PAGE}>
              <a className="nav-link">Sign in</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={REGISTER_PAGE}>
              <a className="nav-link">Sign up</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
