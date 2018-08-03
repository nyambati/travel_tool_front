import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { notAuthenticationMessage } from '../helper/toast';

export default function (ComposedComponent) {
  /**
   * @class Authenticate
   *
   * @extends {React.Component}
 */
class Authenticate extends Component {
    /**
     * @description run action on component 
     * verify if user is sign in or not
     * @param {any} props.params.token
     *
   */
    componentWillMount(){
          const { isAuthenticated, history } = this.props;
          if(!isAuthenticated){
            history.push('/');
            notAuthenticationMessage();
        }
      }
  /**
     * @description allow component to renders to the DOM
     *
     * @memberof Authenticate
     *
     * @returns {JSX} JSX representation of component
   */
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

Authenticate.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
};
  
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

return withRouter(connect(mapStateToProps)(Authenticate));
}



