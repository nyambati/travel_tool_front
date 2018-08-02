import React, { Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import DropdownIcon from "../../../../images/icons/dropdown";
import "./LeftSideNavItem.scss";

export class LeftSideNavItem extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    link_to: PropTypes.string.isRequired,
    iconSrc: PropTypes.func.isRequired,
    isDropdown: PropTypes.bool,
    children: PropTypes.func,
    match: PropTypes.object.isRequired
  }

  static defaultProps = {
    children: () => {},
    isDropdown: false
  }

  constructor(props) {
    super(props);
    this.state = {
      dropdownActive: false,
    };
  }

  getDropdownElements = (children, dropdownStatus, linkIsActive) => {
    const dropdownItems = (
      <div className={`LeftSideNavItem__dropdownContent ${dropdownStatus}`}>
        {children}
      </div>
    );

    const dropdownIcon = (
      <div
        className={`dropdownIcon dropdownIcon--${dropdownStatus}`}
        style={{position: "absolute", right: "30px", top: "17px"}}>
        <DropdownIcon active={linkIsActive} />
      </div>
    );

    return {
      items: dropdownItems,
      icon: dropdownIcon
    };
  }


  toggleDropdown = () => {
    const { dropdownActive } = this.state;
    this.setState({dropdownActive: !dropdownActive});
  }

  render() {
    const {text, link_to, iconSrc, isDropdown, children, match } = this.props;
    const linkIsActive = match.path.startsWith(link_to);
    const LeftIcon = iconSrc;
    const { dropdownActive } = this.state;
    let dropdownStatus = dropdownActive? 'active': 'inactive';
    let dropdownElements;

    if (isDropdown)
      dropdownElements = this.getDropdownElements(children, dropdownStatus, linkIsActive);
      
    return (
      <Fragment>
        <NavLink onClick={this.toggleDropdown} to={link_to} className="LeftSideNavItem">
          <div className="LeftSideNavItem__leftIcon">
            <LeftIcon active={linkIsActive} />
          </div>
          <div className="LeftSideNavItem__Nav-text">
            {text}
          </div>
          { dropdownElements? dropdownElements.icon: null}
        </NavLink>
        {dropdownElements? dropdownElements.items: null}
      </Fragment>
    );
  }
}

export default withRouter(LeftSideNavItem);
