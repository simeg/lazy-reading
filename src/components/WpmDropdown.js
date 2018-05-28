import { createElement as f } from "react";

const wpmSpeeds = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 700];

export default ({ onChange }) =>
  f(
    "select",
    { id: "wpm-dropdown", defaultValue: wpmSpeeds[0], onChange },
    wpmSpeeds.map(speed =>
      f("option", { value: speed, key: speed }, `${speed} wpm`)
    )
  );
