import React from 'react';

const SvgIcon = ({ src, alt }) => {
  return (
    <div
      className="svg-icon"
      dangerouslySetInnerHTML={{ __html: src }}
      aria-label={alt}
    />
  );
};

export default SvgIcon;
