import React, { Component } from 'react';

import andelaLogo from '../../images/andela-logo.svg';

class Request extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout login-page">
        <div className="mdl-layout__content">
          <div className="mdl-grid mdl-grid--no-spacing">
            <div className="mdl-cell mdl-cell--5-col">
              <img src={andelaLogo} alt="Andela Logo" className="login-page__andela-logo" />
              <p className="login-page__travel-request-text">
                 Request Page
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Request;
