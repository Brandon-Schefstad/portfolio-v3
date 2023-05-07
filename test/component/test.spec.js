// @ts-nocheck
/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import * as axe from "axe-core";
import "babel-polyfill";

import Page from "../../components/Hero";
import Nav from "../../components/Nav";
import Technologies from "../../components/Technologies";
import reportViolations from "../utils/axe-logger.cjs";
const reportPath =
  process.cwd() + "/src/test/a11y-reports/component/footer-a11y.log";

describe("Hero Component", () => {
  test("Accessibility check", async () => {
    const { container } = render(<Page />);
    const results = await axe.run(container);

    console.log(results.violations);
    reportViolations(results, reportPath);
    expect(results.violations.length).toBe(0);
  });
});
describe("Nav Component", () => {
  test("Accessibility check", async () => {
    const { container } = render(<Nav />);
    const results = await axe.run(container);

    console.log(results.violations);
    reportViolations(results, reportPath);
    expect(results.violations.length).toBe(0);
  });
});
describe("Tech Component", () => {
  test("Accessibility check", async () => {
    const { container } = render(<Technologies />);
    const results = await axe.run(container);

    console.log(results.violations);
    reportViolations(results, reportPath);
    expect(results.violations.length).toBe(0);
  });
});
