import React from 'react';
import { PropTypes } from 'prop-types';

class SettingsIcon extends React.PureComponent {

  renderSvgGroups = (fill) => {
    return (
      <g id="Web-App" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Requests" transform="translate(-52.000000, -308.000000)">
          <g id="Group-4-Copy-2" transform="translate(50.000000, 306.000000)">
            <g id="icon/action/settings_24px">
              <g id="↳-Light-Color" transform="translate(4.000000, 4.000000)">
                <mask id="settings-mask-2" fill="white">
                  <use xlinkHref="#settings-path-1" />
                </mask>
                <g id="settings-mask" opacity="0.3" fillRule="nonzero" />
                <g id="✱-/-Color-/-Fill-/-transparent" mask="url(#settings-mask-2)" fill="#FFFFFF" opacity="0">
                  <rect id="Rectangle" x="0" y="0" width="101" height="101" />
                </g>
              </g>
              <g id="↳-Dark-Color" transform="translate(2.000000, 2.000000)">
                <mask id="settings-mask-4" fill="white">
                  <use xlinkHref="#settings-path-3" />
                </mask>
                <g id="settings-mask" fillRule="nonzero" />
                <g id="✱-/-Color-/-Border-/-Inactive" mask="url(#settings-mask-4)" fill={fill}>
                  <rect id="Rectangle" x="0" y="0" width="101" height="101" />
                </g>
              </g>
              <g id="↳-Dark-Color" transform="translate(8.000000, 8.000000)">
                <mask id="settings-mask-6" fill="white">
                  <use xlinkHref="#settings-path-5" />
                </mask>
                <g id="settings-mask" fillRule="nonzero" />
                <g id="✱-/-Color-/-Border-/-Inactive" mask="url(#settings-mask-6)" fill={fill}>
                  <rect id="Rectangle" x="0" y="0" width="101" height="101" />
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
      <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>
            AC036E8B-A651-4E93-8335-E02BC5C33BAC
        </title>
        <desc>
          Created with sketchtool.
        </desc>
        <defs>
          <path d="M15.28,4.6 L14.58,3.39 L13.31,3.9 L12.25,4.33 L11.34,3.63 C10.95,3.33 10.54,3.09 10.11,2.92 L9.05,2.49 L8.89,1.36 L8.7,0 L7.3,0 L7.11,1.35 L6.95,2.48 L5.89,2.92 C5.48,3.09 5.07,3.33 4.64,3.65 L3.74,4.33 L2.69,3.91 L1.42,3.39 L0.72,4.6 L1.8,5.44 L2.69,6.14 L2.55,7.27 C2.52,7.57 2.5,7.8 2.5,8 C2.5,8.2 2.52,8.43 2.55,8.73 L2.69,9.86 L1.8,10.56 L0.72,11.4 L1.42,12.61 L2.69,12.1 L3.75,11.67 L4.66,12.37 C5.05,12.67 5.46,12.91 5.89,13.08 L6.95,13.51 L7.11,14.64 L7.3,16 L8.69,16 L8.88,14.65 L9.04,13.52 L10.1,13.09 C10.51,12.92 10.92,12.68 11.35,12.36 L12.25,11.68 L13.29,12.1 L14.56,12.61 L15.26,11.4 L14.18,10.56 L13.29,9.86 L13.43,8.73 C13.47,8.42 13.48,8.21 13.48,8 C13.48,7.79 13.46,7.57 13.43,7.27 L13.29,6.14 L14.18,5.44 L15.28,4.6 Z M8,12 C5.79,12 4,10.21 4,8 C4,5.79 5.79,4 8,4 C10.21,4 12,5.79 12,8 C12,10.21 10.21,12 8,12 Z" id="settings-path-1" />
          <path d="M17.43,10.98 C17.47,10.66 17.5,10.34 17.5,10 C17.5,9.66 17.47,9.34 17.43,9.02 L19.54,7.37 C19.73,7.22 19.78,6.95 19.66,6.73 L17.66,3.27 C17.57,3.11 17.4,3.02 17.22,3.02 C17.16,3.02 17.1,3.03 17.05,3.05 L14.56,4.05 C14.04,3.65 13.48,3.32 12.87,3.07 L12.49,0.42 C12.46,0.18 12.25,0 12,0 L8,0 C7.75,0 7.54,0.18 7.51,0.42 L7.13,3.07 C6.52,3.32 5.96,3.66 5.44,4.05 L2.95,3.05 C2.89,3.03 2.83,3.02 2.77,3.02 C2.6,3.02 2.43,3.11 2.34,3.27 L0.34,6.73 C0.21,6.95 0.27,7.22 0.46,7.37 L2.57,9.02 C2.53,9.34 2.5,9.67 2.5,10 C2.5,10.33 2.53,10.66 2.57,10.98 L0.46,12.63 C0.27,12.78 0.22,13.05 0.34,13.27 L2.34,16.73 C2.43,16.89 2.6,16.98 2.78,16.98 C2.84,16.98 2.9,16.97 2.95,16.95 L5.44,15.95 C5.96,16.35 6.52,16.68 7.13,16.93 L7.51,19.58 C7.54,19.82 7.75,20 8,20 L12,20 C12.25,20 12.46,19.82 12.49,19.58 L12.87,16.93 C13.48,16.68 14.04,16.34 14.56,15.95 L17.05,16.95 C17.11,16.97 17.17,16.98 17.23,16.98 C17.4,16.98 17.57,16.89 17.66,16.73 L19.66,13.27 C19.78,13.05 19.73,12.78 19.54,12.63 L17.43,10.98 Z M15.45,9.27 C15.49,9.58 15.5,9.79 15.5,10 C15.5,10.21 15.48,10.43 15.45,10.73 L15.31,11.86 L16.2,12.56 L17.28,13.4 L16.58,14.61 L15.31,14.1 L14.27,13.68 L13.37,14.36 C12.94,14.68 12.53,14.92 12.12,15.09 L11.06,15.52 L10.9,16.65 L10.7,18 L9.3,18 L9.11,16.65 L8.95,15.52 L7.89,15.09 C7.46,14.91 7.06,14.68 6.66,14.38 L5.75,13.68 L4.69,14.11 L3.42,14.62 L2.72,13.41 L3.8,12.57 L4.69,11.87 L4.55,10.74 C4.52,10.43 4.5,10.2 4.5,10 C4.5,9.8 4.52,9.57 4.55,9.27 L4.69,8.14 L3.8,7.44 L2.72,6.6 L3.42,5.39 L4.69,5.9 L5.73,6.32 L6.63,5.64 C7.06,5.32 7.47,5.08 7.88,4.91 L8.94,4.48 L9.1,3.35 L9.3,2 L10.69,2 L10.88,3.35 L11.04,4.48 L12.1,4.91 C12.53,5.09 12.93,5.32 13.33,5.62 L14.24,6.32 L15.3,5.89 L16.57,5.38 L17.27,6.59 L16.2,7.44 L15.31,8.14 L15.45,9.27 Z" id="settings-path-3" />
          <path d="M4,0 C1.79,0 0,1.79 0,4 C0,6.21 1.79,8 4,8 C6.21,8 8,6.21 8,4 C8,1.79 6.21,0 4,0 Z M4,6 C2.9,6 2,5.1 2,4 C2,2.9 2.9,2 4,2 C5.1,2 6,2.9 6,4 C6,5.1 5.1,6 4,6 Z" id="settings-path-5" />
        </defs>
        {this.renderSvgGroups(fill)}
      </svg>
    );
  }
}

SettingsIcon.propTypes = {
  active: PropTypes.bool.isRequired
};

export default SettingsIcon;
