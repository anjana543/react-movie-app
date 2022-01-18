import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

/**
 * @description - TextField Component.
 * @returns {Node} - Returns the TextField view.
 */
function TextField({ val, handleChange, ...props }) {
  return <input value={val} onChange={handleChange} {...props} />;
}

TextField.defaultProps = {};

TextField.propTypes = {};

export default TextField;
