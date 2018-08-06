import React, { PureComponent } from 'react';

class RequestHeaderBottomLeftSection extends PureComponent{
    render(){
        return(
          <div className="OpenRequestsButtonSection">
            <button type="button" className="all-button">
              <span className="all">
                    All
              </span>
            </button>

            <button type="button" className="open-request-button">
              <span className="open-requests">
                    Open Requests
              </span>
              <span className="oval-4">
                <p className="open-request-number">
                    3
                </p>
              </span>
            </button>

            <button type="button" className="past-request-button">
              <span className="past-requests">
                    Past Requests
              </span>
            </button>
          </div>
        )
    }
}

export default RequestHeaderBottomLeftSection;