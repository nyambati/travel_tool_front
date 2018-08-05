import React, { Component } from "react";
import icon from "../../images/Icon.svg";

class RequestPanelHeader extends Component {
    render() {
      return (
        <div className="RequestsPanelHeader">
          <div className="NewRequests">
            <div>
              <span className="requests">
                REQUESTS
              </span>
            </div>
            <div>
              <button type="button" className="NewRequestButton">
                <span className="NewRequestButtonText">
                  New Request
                </span>
              </button>
            </div>
          </div>

          <div className="OpenRequests">
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
            <div className="ItemsPerPageSection">
              <div className="ItemsPerPageText">
                Items per page
              </div>
              <div className="divider">
              </div>
              <div className="ItemsPerPagePagination">
                <div>
                  <span className="PaginateCounter">
                    10  
                  </span>
                </div>
                <div className="PaginatorDropdown">
                  <span>
                    <img src={icon} alt="Andela Logo" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default RequestPanelHeader;