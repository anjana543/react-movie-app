import PropTypes from "prop-types";

/**
 * @description - ErrorBlock Component.
 * @param {string} title - Error main text.
 * @param {string} subTitle - Error subText.
 * @param {string} color - Define text color.
 * @param {string} align - Define text alignment.
 * @returns {Node} - ErrorBlock View Component
 */
const ErrorBlock = ({ title, subTitle, color, align }) => {
  return (
    <div
      className={`flex justify-center items-center p-10 m-5 text-sm text-${color} text-${align}`}
      role="alert"
    >
      {title && <span className="font-medium">{title}</span>} {subTitle}
    </div>
  );
};

ErrorBlock.defaultProps = {
  title: "",
  subTitle: "",
  color: "white",
  align: "center",
};

ErrorBlock.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
};

export default ErrorBlock;
