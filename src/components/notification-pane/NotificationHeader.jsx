import React, { PureComponent } from 'react';

import './_notificationHeader.scss';
import closeBtn from '../../images/close-btn.svg';

/**
 * @description - Header of the notification pane
 *
 * @class NotificationHeader
 *
 * @extends {PureComponent}
 *
 */
export default class NotificationHeader extends PureComponent {
  render() {
    return (
      <div className="notifications-header">
        <div className="notifications-header__title">
          Notifications
        </div>
        <img
          src={closeBtn}
          alt="close button"
          className="notifications-header__close-btn"
        />
      </div>
    );
  }
}
