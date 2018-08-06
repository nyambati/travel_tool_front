import React, { PureComponent } from 'react';
import icon from '../../images/Icon.svg';

class RequestHeaderBottomRightSection extends PureComponent{
    render(){
        return(
          <div className="ItemsPerPageSection">
            <div className="ItemsPerPageTextSection">
              <span className="ItemsPerPageText">
                  Items per page
              </span>
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