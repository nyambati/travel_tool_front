import React from 'react';
import { PropTypes } from 'prop-types';

class BookmarkIcon extends React.PureComponent {

  renderSvgGroups = (fill) => {
    return (
      <g id="Web-App" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Requests" transform="translate(-55.000000, -144.000000)">
          <g id="Group-5" transform="translate(0.000000, 128.000000)">
            <g id="icon/action/bookmark_24px" transform="translate(50.000000, 13.000000)">
              <g id="↳-Light-Color" transform="translate(7.000000, 5.000000)">
                <mask id="bookmark-mask-2" fill="white">
                  <use xlinkHref="#path-1" />
                </mask>
                <g id="bookmark-mask" opacity="0.3" fillRule="nonzero" />
                <g id="✱-/-Color-/-Fill-/-transparent" mask="url(#bookmark-mask-2)" fill="#FFFFFF" opacity="0">
                  <rect id="Rectangle" x="0" y="0" width="101" height="101" />
                </g>
              </g>
              <g id="↳-Dark-Color" transform="translate(5.000000, 3.000000)">
                <mask id="bookmark-mask-4" fill="white">
                  <use xlinkHref="#path-3" />
                </mask>
                <g id="bookmark-mask" fillRule="nonzero" />
                <g id="✱-/-Color-/-Border-/-Active" mask="url(#bookmark-mask-4)" fill={fill}>
                  <rect id="Rectangle-13" x="0" y="0" width="101" height="101" />
                </g>
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
      <svg width="14px" height="18px" viewBox="0 0 14 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>
          7D627ECF-F811-4218-B0FD-305F290B9E25
        </title>
        <defs>
          <polygon id="path-1" points="0 12.97 5 10.82 10 12.97 10 0 0 0" />
          <path d="M12,0 L2,0 C0.9,0 0,0.9 0,2 L0,18 L7,15 L14,18 L14,2 C14,0.9 13.1,0 12,0 Z M12,14.97 L7,12.83 L2,14.97 L2,2 L12,2 L12,14.97 Z" id="path-3" />
        </defs>
        {this.renderSvgGroups(fill)}
      </svg>
    );
  }
}

BookmarkIcon.propTypes = {
  active: PropTypes.bool.isRequired
};

export default BookmarkIcon;
