/* global describe, it, expect */

import { inputOnChange, setWordTickerRunning } from "./actions";
import { initialState, reducer } from "./reducer";

describe("actions", () => {
  it("inputOnChange should create INPUT_ON_CHANGE action", () => {
    expect(inputOnChange("specific-input")).toEqual({
      type: "INPUT_ON_CHANGE",
      input: "specific-input"
    });
  });
});

describe("reducer", () => {
  it("changes nothing on undefined action", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("builds correct state for INPUT_ON_CHANGE", () => {
    expect(
      reducer({}, { type: "INPUT_ON_CHANGE", input: "specific-input" })
    ).toEqual({ userInput: "specific-input" });
  });

  it("does not set WORD_TICKER_RUNNING to true when no value present", () => {
    expect(
      reducer(
        { userInput: undefined, isTickerRunning: false },
        { type: "WORD_TICKER_RUNNING", isRunning: true }
      )
    ).toEqual({ isTickerRunning: false });
  });
});
