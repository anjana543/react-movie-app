import { render, screen, cleanup, fireEvent } from "../../utils/testUtils";

import ErrorBlock from "./index";

describe("ErrorBlock", () => {
  beforeEach(() => {
    const props = { title: "Error!", subTitle: "Something went wrong." };
    render(<ErrorBlock {...props} />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders ErrorBlock", () => {
    const node = screen.getByRole("alert");
    expect(node).toBeInTheDocument();
  });
  test("displays error title", () => {
    const title = screen.getByText(/Error/i);
    expect(title).toBeInTheDocument();
  });
  test("displays error sub title", () => {
    const subTitle = screen.getByText(/Something went/i);
    expect(subTitle).toBeInTheDocument();
  });
});
