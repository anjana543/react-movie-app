/**
 * @description - Loader Component.
 * @param {string} color - Border color of loader.
 * @param {string} width - Loader width.
 * @param {string} height - Loader height.
 * @returns {Node} - ErrorBlock View Component
 */
const Loader = (props) => {
  return (
    <div className="flex justify-center items-center p-10 m-5">
      <div
        className={`spinner-border animate-spin inline-block w-12 h-12 border-b-2 rounded-full`}
        role="status"
        data-testid="loader"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
