import {
  render,
  screen,
  cleanup,
  store,
  fireEvent,
} from "../../utils/testUtils";

import Header from "./index";
import { updateHeader } from "../../store/actions";
import { mockHeaderData } from "../../utils/mockData";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
    store.dispatch(updateHeader(mockHeaderData));
  });

  afterEach(() => {
    cleanup();
  });

  test("renders Header", () => {
    const backIcon = screen.getByAltText(/back icon/i);
    const title = screen.getByText(/Romantic Comedy/i);
    const searchIcon = screen.getByAltText(/search icon/i);
    expect(title).toBeInTheDocument();
    expect(backIcon).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
    fireEvent.click(searchIcon);
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });
});
