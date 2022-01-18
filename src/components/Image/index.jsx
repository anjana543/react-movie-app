import React from "react";
import PropTypes from "prop-types";
import { CONFIG } from "../../utils/constant";

/**
 * @description - Image Icon Component.
 * @param {string} src - Image path.
 * @param {string} alt - Image alternative text.
 * @returns {Node} - Returns the image icon view.
 */
function Image({ src, alt, ...props }) {
  return (
    <img
      src={`${CONFIG.ASSETS}${src}`}
      alt={alt}
      className="w-5 h-5 transition duration-500 ease-in-out transform hover:scale-110"
      data-testid="icon"
      {...props}
    />
  );
}

Image.defaultProps = {
  img: "",
  alt: "",
};

Image.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
