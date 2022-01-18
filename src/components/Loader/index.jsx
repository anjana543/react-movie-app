import PropTypes from "prop-types";

/**
 * @description - Loader Component.
 * @param {string} color - Border color of loader.
 * @param {string} width - Loader width.
 * @param {string} height - Loader height.
 * @returns {Node} - ErrorBlock View Component
 */
const Loader = ({ color, width, height }) => {
  return (
    <div className="flex items-center justify-center ">
      <div
        className={`w-${width} h-${height} border-b-2 border-${color}-900 rounded-full animate-spin`}
        data-testid="loader"
      ></div>
    </div>
  );
};

Loader.defaultProps = {
  color: "white",
  width: "16",
  height: "16",
};

Loader.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Loader;
