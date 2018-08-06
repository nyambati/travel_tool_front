import React, { Component } from 'react';
import icon from '../../images/Icon.svg';
import RequestHeaderTop from './RequestHeaderTop';
import RequestHeaderBottom from './RequestHeaderBotton';

class RequestPanelHeader extends Component {
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