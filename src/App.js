import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./pages/MovieList";
import Header from "./layout/Header";
import Body from "./layout/Body";
import { updateHeader } from "./store/actions";

/**
 * @description - App Root.
 * @returns {Node} - App Root.
 */
const App = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef();
  const headerData = useSelector((state) => state.headerData);

  /**
   * @description - Scroll Handler.
   *  @returns {null} - Returns null.
   */
  const handleScroll = () => {
    const { scrollTop } = scrollRef.current;
    if (scrollTop > 0 && !headerData.isScroll) {
      dispatch(updateHeader({ isScroll: true }));
    }
  };

  return (
    <div
      className="bg-black w-screen h-screen overflow-auto no-scrollbar"
      ref={scrollRef}
      onScroll={handleScroll}
      data-testid="main"
    >
      <Header />
      <Body>
        <MovieList />
      </Body>
    </div>
  );
};

export default App;
