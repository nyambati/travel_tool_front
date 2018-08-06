import React, { PureComponent } from 'react';
import './Request.scss';
import RequestPanelHeader from '../../components/request-header/RequestPanelHeader';

class Request extends PureComponent{
    render(){
        return(
          <RequestPanelHeader />
        )
    }
}

export default Request;