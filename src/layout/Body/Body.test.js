import { render, screen } from "../../utils/testUtils";

import Body from "./index";

describe("Body", () => {
  test("renders Body", () => {
    render(<Body />);
    const node = screen.getByTestId("content");
    expect(node).toBeInTheDocument();
  });
});
