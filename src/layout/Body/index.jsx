import PropTypes from "prop-types";

/**
 * @description - Body Component.
 * @returns {Node} - Body View Component
 */
const Body = ({ children }) => {
  return (
    <div className="container" data-testid="content">
      {children}
    </div>
  );
};

Body.propTypes = {};

export default Body;
