import { Fragment, createElement as f } from "react";

const wpmToSpeedString = wpm => {
  const numberWpm = parseInt(wpm, 10);
  switch (numberWpm) {
    case 100:
    case 150:
      return "Slow";
    case 200:
    case 250:
      return "Normal";
    case 300:
    case 350:
    case 400:
      return "Fast";
    case 450:
    case 500:
    case 550:
      return "Super";
    case 600:
    case 650:
    case 700:
      return "Ultra";
    default:
      const msg = `Could not parse WPM value=[${wpm}] of type=[${typeof wpm}]`;
      throw new TypeError(msg);
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
      defaultValue: 100,
      max: 700,
      min: 100,
      step: 50
    }),
    f(
      "div",
      null,
      f("span", null, "WPM: " + wpm),
      f("span", { style: { float: "right" } }, wpmToSpeedString(wpm))
    )
  );
};
