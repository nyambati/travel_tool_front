import React from 'react';
import { PropTypes } from 'prop-types';

class DropdownIcon extends React.PureComponent {

  renderSvgGroups = (fill) => {
    return (
      <g id="Web-App" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Requests" transform="translate(-196.000000, -151.000000)">
          <g id="Group-5" transform="translate(0.000000, 128.000000)">
            <g id="icon/navigation/expand_less_24px" transform="translate(192.000000, 17.000000)">
              <mask id="dropdown-mask-2" fill="white">
                <use xlinkHref="#dropdown-path-1" />
              </mask>
              <g fillRule="nonzero" />
              <g id="✱-/-Color-/-Border-/-Active" mask="url(#dropdown-mask-2)" fill={fill} fillRule="evenodd">
                <rect id="Rectangle-13" x="0" y="0" width="18" height="18" />
              </g>
            </g>
          </g>
        </g>
      </g>
    );
  }

  render() {
    const { active } = this.props;
    const fill = active? '#3359DB': '#999999';

    return (
      <svg width="10px" height="6px" viewBox="0 0 10 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsHlink="http://www.w3.org/1999/xlink">
        <title>
          0FE89DFF-A8FB-4D5C-95C0-4A3B10101A32
        </title>
        <desc>
          Created with sketchtool.
        </desc>
        <defs>
          <polygon id="dropdown-path-1" points="9 6.22125 4.5 10.72125 5.5575 11.77875 9 8.34375 12.4425 11.77875 13.5 10.72125" />
        </defs>
        {this.renderSvgGroups(fill)}
      </svg>
    );
  }
}

DropdownIcon.propTypes = {
  active: PropTypes.bool.isRequired
};

export default DropdownIcon;
