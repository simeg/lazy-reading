import React from "react";
import InputSection from "../containers/InputSection";
import OutputSection from "../containers/OutputSection";
import Footer from "../containers/Footer";

const f = React.createElement;

const App = () =>
  f(
    "div",
    { id: "outer" },
    f(InputSection, null),
    // f(OutputSection, null),
    f(Footer, null)
  );

export default App;
