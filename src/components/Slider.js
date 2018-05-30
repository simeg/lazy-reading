import { Fragment, createElement as f } from "react";

const wpmToSpeedString = wpm => {
  const numberWpm = parseInt(wpm, 10);
  if (numberWpm <= 200) {
    return "Slow";
  } else if (numberWpm > 200 && numberWpm <= 300) {
    return "Normal";
  } else {
    return "Fast";
  }
};

export default ({ onChange, wpm }) => {
  return f(
    Fragment,
    null,
    f("input", {
      type: "range",
      className: "slider",
      onChange,
      defaultValue: 300,
      max: 500,
      min: 100,
      step: 1
    }),
    f(
      "div",
      null,
      f("span", null, "WPM: " + wpm),
      f("span", { style: { float: "right" } }, wpmToSpeedString(wpm))
    )
  );
};
