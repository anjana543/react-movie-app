import PropTypes from "prop-types";
import Image from "../Image";

/**
 * @description - GridItem Component.
 * @returns {Node} - GridItem View Component
 */
function GridItem({ item }) {
  return (
    <div
      className="flex flex-col justify-start items-start pb-10 overflow-hidden"
      title={item.name}
      data-testid="grid-item"
    >
      <Image
        src={item["poster-image"]}
        alt={item.name}
        className="flex-none w-full h-full pb-2"
        loading="lazy"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "/assets/placeholder_for_missing_posters.png";
        }}
      />
      <div className="flex-none w-full text-left text-slate-50 whitespace-nowrap overflow-hidden overflow-ellipsis">
        {item.name}
      </div>
    </div>
  );
}

GridItem.defaultProps = {
  item: {},
};

GridItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    "poster-image": PropTypes.string,
  }),
};

export default GridItem;
