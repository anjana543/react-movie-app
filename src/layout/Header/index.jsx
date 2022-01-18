import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "../../components/Image";
import TextField from "../../components/TextField";
import { debounce } from "../../utils";
import { updateSearch } from "../../store/actions";

/**
 * @description - Header Component.
 * @returns {Node} - Header View Component
 */
const Header = () => {
  const dispatch = useDispatch();
  const [showSearchField, setSearchFieldStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const headerData = useSelector((state) => state.headerData);

  const setData = (value) => {
    dispatch(updateSearch(value));
  };

  const debouncedSave = useCallback(
    debounce((nextValue) => setData(nextValue), 300),
    []
  );

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    debouncedSave(e.target.value);
  };

  return (
    <div
      className={`flex flex-row ${
        headerData?.isScroll ? "sticky top-0 z-10 bg-black" : "absolute"
      } justify-center items-center space-x-4 p-4 bg-gradient-to-b from-black via-black w-full h-24`}
      data-testid="nav"
    >
      <div className="flex-initial flex-shrink-0">
        <Image src="Back.png" alt="back icon" />
      </div>
      <div className="flex-auto flex-shrink-0 text-left text-white whitespace-nowrap align-middle text-lg font-semibold">
        {headerData?.title}
      </div>
      <div className="flex flex-row flex-initial justify-end">
        <div
          className={`${
            showSearchField ? "hidden" : ""
          } flex flex-row flex-initial justify-end items-end space-x-2`}
          onClick={() => setSearchFieldStatus(!showSearchField)}
        >
          <Image src="search.png" alt="search icon" />
        </div>
        <div
          className={`${
            !showSearchField ? "hidden" : ""
          } flex flex-initial justify-end items-end`}
        >
          <TextField
            handleChange={handleInputChange}
            val={searchTerm}
            className="w-11/12 rounded-md p-1 px-1.5 transition duration-1000 ease-in transform scale-100 bg-black border-b rounded-none text-white hover:outline-0"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
