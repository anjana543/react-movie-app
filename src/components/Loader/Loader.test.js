import { render, screen, cleanup, fireEvent } from "../../utils/testUtils";

import Loader from "./index";

describe("Loader", () => {
  beforeEach(() => {
    const props = { width: "16", height: "16", color: "white" };
    render(<Loader {...props} />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders Loader", () => {
    const loaderNode = screen.getByTestId("loader");
    expect(loaderNode).toBeInTheDocument();
  });
});
