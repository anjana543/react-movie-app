import { render, screen, cleanup } from "../../utils/testUtils";

import Image from "./index";

describe("Image", () => {
  beforeEach(() => {
    const props = { src: "/assets/search.png", alt: "search icon" };
    render(<Image {...props} />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders Image", () => {
    const image = screen.queryByTestId("icon");
    expect(image).toBeInTheDocument();
  });
  test("uses correct src", async () => {
    const image = screen.queryByTestId("icon");
    expect(image.src).toContain("/assets/search.png");
  });
});
