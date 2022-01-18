import { render, screen } from "./utils/testUtils";
import App from "./App";

test("renders app", () => {
  render(<App />);

  const main = screen.getByTestId("main");
  const nav = screen.getByTestId("nav");
  const content = screen.getByTestId("content");

  expect(main).toContainElement(nav);
  expect(main).toContainElement(content);
});
