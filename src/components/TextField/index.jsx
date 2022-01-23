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
