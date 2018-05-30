import { createElement as f } from "react";
import { connect } from "react-redux";
import WordTicker from "../components/WordTicker";
import { setWordTickerRunning, readerIncWord } from "../actions";

const mapStateToProps = state => ({
  input: state.reducer.userInput,
  isRunning: state.reducer.isTickerRunning,
  wpm: state.reducer.wpm,
  wordIndex: state.reducer.wordIndex
});

const OutputSection = ({
  dispatch,
  input,
  isRunning,
  wpm,
  readerState,
  wordIndex
}) => {
  return f(
    "div",
    { id: "output" },
    f(WordTicker, {
      dispatch,
      input,
      isRunning,
      wpm,
      wordIndex,
      setWordTickerRunning,
      readerIncWord
    })
  );
};

export default connect(mapStateToProps)(OutputSection);
