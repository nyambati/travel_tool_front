import React, { Component } from 'react';
import icon from '../../images/Icon.svg';

class RequestHeaderBottomRightSection extends Component{
    render(){
        return(
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
        )
    }
}

export default RequestHeaderBottomRightSection;