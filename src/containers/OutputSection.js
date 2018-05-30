import { createElement as f } from "react";
import { connect } from "react-redux";
import WordTicker from "../components/WordTicker";
import { readerIncWord, readerStop } from "../actions";

const mapStateToProps = state => ({
  input: state.reducer.userInput,
  wpm: state.reducer.wpm,
  wordIndex: state.reducer.wordIndex,
  readerState: state.reducer.readerState
});

const OutputSection = ({ dispatch, input, wpm, readerState, wordIndex }) => {
  // TODO: Clean up state handling for WordTicker.
  // Should this state really be handled outside the component?
  if (readerState === "INACTIVE") return null;
  return f(
    "div",
    { id: "output" },
    f(WordTicker, {
      dispatch,

      // Props
      input,
      wpm,
      wordIndex,
      readerState,

      // Actions
      readerIncWord,
      readerStop
    })
  );
};

export default connect(mapStateToProps)(OutputSection);
