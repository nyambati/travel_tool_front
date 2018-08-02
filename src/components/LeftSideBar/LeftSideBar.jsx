import React from "react";
import LeftSideNavItems from "./LeftSideNavItems/LeftSideNavItems";
import "./LeftSideBar.scss";

const LeftSideBar = () => (
  <div className="LeftSideBar mdl-cell mdl-cell--2-col">
    <div className="LeftSideBar__fixed_wrapper">
      <div style={{overflowY: "scroll", height: "100%"}}>
        <LeftSideNavItems />
      </div>
    </div>
  </div>
);

export default LeftSideBar;
