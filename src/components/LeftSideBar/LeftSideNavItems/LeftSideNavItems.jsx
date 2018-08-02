import React, { Fragment } from "react";
import LeftSidebarNavItem from "./LeftSideNavItem/LeftSideNavItem";
import DropdownItem from "./DropdownItem/DropdownItem";
import BookmarkIcon from "../../../images/icons/bookmark";
import SettingsIcon from "../../../images/icons/settings";


const LeftSideNavItems = () => (
  <Fragment>
    <LeftSidebarNavItem isDropdown iconSrc={BookmarkIcon} link_to="/requests" text="Requests">
      <DropdownItem link_to="/requests/my-requests">
        My Requests
      </DropdownItem>
      <DropdownItem link_to="/requests/my-approvals">
        My Approvals
      </DropdownItem>
    </LeftSidebarNavItem>
    <LeftSidebarNavItem iconSrc={SettingsIcon} link_to="/settings" text="Settings" />
  </Fragment>
);

export default LeftSideNavItems;
