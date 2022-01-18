import { render, screen, cleanup, fireEvent } from "../../utils/testUtils";

import TextField from "./index";

describe("TextField", () => {
  beforeEach(() => {
    const props = { placeholder: "Search", handleChange: jest.fn() };
    render(<TextField {...props} />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders TextField", () => {
    const inputNode = screen.getByPlaceholderText("Search");
    expect(inputNode).toBeInTheDocument();
  });
  test("updates on change", () => {
    const searchInput = screen.queryByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
    fireEvent.change(searchInput, { target: { value: "" } });
    expect(searchInput.value).toBe("");
  });
});
