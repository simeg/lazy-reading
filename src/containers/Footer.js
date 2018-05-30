import { createElement as f } from "react";
import Link from "../components/Link";

export default () => {
  return f(
    "div",
    { id: "footer" },
    f(Link, { href: "#about", text: "About" }),
    f("span", null, " | "),
    f(Link, { href: "#contact", text: "Contact" })
  );
};
