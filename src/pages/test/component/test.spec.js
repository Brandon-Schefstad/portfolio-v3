/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as axe from "axe-core";
import "babel-polyfill";

import Page from "../../TestPage";
import reportViolations from "../utils/axe-logger";
const reportPath =
  process.cwd() + "/src/test/a11y-reports/component/footer-a11y.log";

describe("Footer Component", () => {
  test("Accessibility check", async () => {
    const { container } = render(<Page />);
    const results = await axe.run(container);

    console.log(results.violations);
    reportViolations(results, reportPath);
    expect(results.violations.length).toBe(0);
  });
});
