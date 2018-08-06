import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import "./DropdownItem.css";

const DropdownItem = (props) => {
  const { children, link_to } = props;
  return (
    <NavLink to={link_to} className="DropdownItem">
      {children}
    </NavLink>
  );
};

DropdownItem.propTypes = {
  link_to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default DropdownItem;
