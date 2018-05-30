import { createElement as f } from "react";

export default ({ href, target, text }) => {
  return f("a", { href, target }, text);
};
