import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridItem from "../components/GridItem";
import useFetch from "../hooks/useFetch";
import { updateHeader, updateMovieData } from "../store/actions";
import { API } from "../utils/constant";
import Loader from "../components/Loader";
import ErrorBlock from "../components/ErrorBlock";
import { filterDataByName, setKeyWithIndex } from "../utils";

/**
 *  @description - Movie List View Page.
 *  @returns {Node} - Returns Movie List.
 */
const MovieList = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [list, setList] = useState([]);
  const { movieData, searchData } = useSelector((state) => state);

  const { data, hasMore, loading } = useFetch(API.PAGE, pageNumber);

  useEffect(() => {
    if (data) {
      const pageItems = data?.["content-items"]?.content || [];
      dispatch(updateHeader({ title: data?.title || "" }));
      dispatch(updateMovieData(pageItems));
      const updatedList = [...list, ...pageItems];
      let filteredList = searchData?.term
        ? filterDataByName(searchData.term, updatedList)
        : updatedList;
      setList(filteredList);
    }
  }, [data]);

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    if (searchData?.term) {
      const updatedList = filterDataByName(searchData?.term, movieData);
      setList(updatedList);
    } else {
      setList(movieData);
    }
  }, [searchData]);

  return (
    <>
      <div className="w-full p-4 grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
        {list.map((item, index) => {
          return (
            <div
              key={setKeyWithIndex(item.name, index)}
              className="min-w-full"
              {...(list.length === index + 1 && {
                ref: lastElementRef,
              })}
              data-testid="movie-item"
            >
              <GridItem item={item} />
            </div>
          );
        })}
        {loading && <Loader />}
      </div>
      {!loading && list.length === 0 && (
        <ErrorBlock title="Error!" subTitle="Something went wrong." />
      )}
    </>
  );
};

export default MovieList;
