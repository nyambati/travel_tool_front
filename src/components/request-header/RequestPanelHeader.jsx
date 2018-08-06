import React, { PureComponent } from 'react';
import icon from '../../images/Icon.svg';
import RequestHeaderTop from './RequestHeaderTop';
import RequestHeaderBottom from './RequestHeaderBotton';

class RequestPanelHeader extends PureComponent {
    render() {
      return (
        <div className="RequestsPanelHeader">
          <RequestHeaderTop />
          
          <RequestHeaderBottom />
        </div>
      );
    }
  }

export default RequestPanelHeader;