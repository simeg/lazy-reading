import { createElement as f } from "react";

export default ({ className, onChange, value, wordIndex }) => {
  return f("textarea", {
    className,
    autoFocus: true,
    onChange,
    placeholder: "Enter a text you want to lazy read..",
    required: true,
    value
  });
};
