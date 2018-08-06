import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import logo from '../../images/logo.svg';
import icon from '../../images/icon.svg';
import notification from '../../images/notification.svg';
import SearchBar from '../search-bar/SearchBar';
import './NavBar.scss';

/**
 * @description - Contains SearhBar componentents, Logo, user avatar and logout
 *
 * @class NavBar
 *
 * @extends {PureComponent}
 *
 */

class NavBar extends PureComponent {
  renderLogo() {
    return (
      <span className="logo-icons">
        <img src={logo} alt="Andela Logo" />
      </span>
    );
  }

  renderNotification() {
    const { onNotificationToggle } = this.props;
    return (
      <div
        id="notification"
        onClick={onNotificationToggle}
        className="nav-size"
        role="presentation"
      >
        <span className="material-icons mdl-badge" data-badge="12">
          <img
            src={notification}
            alt="Notification"
            className="navbar-notification"
            data-badge="10"
          />
        </span>
      </div>
    );
  }

  renderUserIcons() {
    const { avatar } = this.props;
    return (
      <div>
        <span className="mdl-icons">
          <img src={avatar} alt="Andela Logo" className="mdl-upic" />
          <span className="text-size">
            Silm Momoh
          </span>
        </span>
        <span>
          <button type="button" id="demo-menu-lower-right" className="mdl-button mdl-js-button mdl-button--icon mdl-Icons">
            <img src={icon} alt="Dropdown Icon" className="mdl-Icon" />
          </button>
          <div className="mdl-list">
            <ul htmlFor="demo-menu-lower-right" className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect">
              <li className="mdl-menu__item">
                Logout
              </li>
            </ul>
          </div>
        </span>
      </div>
    );
  }
  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <div className="nav-size logo-icons">
            {this.renderLogo()}
          </div>
          <div className="mdl-layout-spacer" />
          <div className="search-size">
            <SearchBar />
          </div>
          <nav className="mdl-navigation">
            {this.renderNotification()}
            <div className="user-icon nav-size">
              {this.renderUserIcons()}
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

NavBar.propTypes = {
  avatar: PropTypes.string.isRequired,
  onNotificationToggle: PropTypes.func.isRequired
};

export default NavBar;
