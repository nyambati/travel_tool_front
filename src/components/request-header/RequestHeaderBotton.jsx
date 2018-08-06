import React, { Component } from 'react';
import RequestHeaderBottomLeftSection from './RequestHeaderBottomLeftSection';
import RequestHeaderBottomRightSection from './RequestHeaderBottomRightSection';

class RequestHeaderBottom extends Component{
    render(){
        return(
          <div className="OpenRequests">
            <RequestHeaderBottomLeftSection />
            
            <RequestHeaderBottomRightSection />
          </div>
        )
    }
}

export default RequestHeaderBottom;