import {
  render,
  screen,
  cleanup,
  store,
  waitForElement,
} from "../utils/testUtils";
import MovieList from "./MovieList";
import { updateHeader, updateMovieData } from "../store/actions";
import { mockData } from "../utils/mockData";
import GridItem from "../components/GridItem";

const itemList = mockData?.page?.["content-items"].content || [];

describe("MovieList", () => {
  let originFetch;
  beforeEach(() => {
    originFetch = global.fetch;
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: jest.fn().mockReturnValue(null),
      unobserve: jest.fn().mockReturnValue(null),
      disconnect: jest.fn().mockReturnValue(null),
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });
  afterEach(() => {
    global.fetch = originFetch;
  });
  beforeEach(() => {
    render(<MovieList />);
    store.dispatch(updateHeader({ title: "Romantic Comedy" }));
    store.dispatch(updateMovieData(itemList));
  });

  afterEach(() => {
    cleanup();
  });
  test("renders MovieList and display api response", async () => {
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    const mRes = { json: jest.fn().mockResolvedValueOnce(mockData) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;
    render(<GridItem />);
    const singleNameList = await screen.findAllByText(/The Birds/i);
    expect(singleNameList[0]).toBeInTheDocument();
    expect(singleNameList.length).toBe(8);
  });
});
