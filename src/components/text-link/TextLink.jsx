import React from 'react';
import PropTypes from 'prop-types';

import './TextLink.scss';

class TextLink extends React.PureComponent{
 
  render(){
    const { imageSrc, textLinkClass, textClass, altText, text } = this.props;
    return (
      <p className={textLinkClass}>
        <img src={imageSrc} alt={altText} />
        <a href="/" className={textClass}>
          {text}
                 
        </a>
      </p>
    );
  }
}

TextLink.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    textLinkClass: PropTypes.string,
    textClass: PropTypes.string,
    altText: PropTypes.string,
    text: PropTypes.string,
};

TextLink.defaultProps = {
  textLinkClass : 'login-page__text-link',
  textClass: 'login-page__text',
  altText: 'Image',
  text: 'Text link'
};

export default TextLink;