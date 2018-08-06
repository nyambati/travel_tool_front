import React, { PureComponent } from 'react';
import NotificationHeader from './NotificationHeader';
import NotificationContainer from './NotificationContainer';

import './_notificationPane.scss';

import NotificationItem from './NotificationItem';
import notifications from '../../mockData/notifications';

const generalNotifications = [];

/**
 * @description - Filters pending and general notifications
 *
 * @returns {array} list of General and Pending Notifications
 *
 */
const pendingNotifications = notifications.filter(notification => {
  if (!notification.isPending) {
    generalNotifications.push(notification);
  }
  return notification.isPending;
});

/**
 * @description - Notification Pane component
 *
 * @class NotificationPane
 *
 * @extends {PureComponent}
 *
 */
export default class NotificationPane extends PureComponent {
  render() {
    return (
      <div className="nav-pane">
        <NotificationHeader />
        <div className="scrollable-div">
          <NotificationContainer title="Pending Approvals" pendingNotifications={pendingNotifications} />
          <NotificationContainer title="General Notifications" generalNotifications={generalNotifications} />
        </div>
      </div>
    );
  }
}
