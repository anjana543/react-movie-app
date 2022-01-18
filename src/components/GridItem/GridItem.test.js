import { render, screen, cleanup } from "../../utils/testUtils";

import GridItem from "./index";

describe("GridItem", () => {
  beforeEach(() => {
    const item = {
      name: "The Birds",
      "poster-image": "poster1.jpg",
    };
    render(<GridItem item={item} />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders GridItem", () => {
    const node = screen.queryByTestId("grid-item");
    expect(node).toBeInTheDocument();
  });
  test("displays item name", () => {
    const name = screen.getByText(/The Birds/i);
    expect(name).toBeInTheDocument();
  });
  test("display item image", () => {
    const image = screen.queryByTestId("icon");
    expect(image.src).toContain("poster1.jpg");
  });
});
