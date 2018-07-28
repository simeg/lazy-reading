import { createElement as f } from "react";
import { connect } from "react-redux";
import Slider from "../components/Slider";
import Textarea from "../components/Textarea";
import WordCounter from "../components/WordCounter";
import WordTicker from "../components/WordTicker";
import {
  inputOnChange,
  wpmOnChange,
  readerStop,
  readerStart,
  readerPause,
  readerIncWord
} from "../actions";

const mapStateToProps = state => ({
  userInput: state.reducer.userInput,
  wordIndex: state.reducer.wordIndex,
  wpm: state.reducer.wpm,
  readerState: state.reducer.readerState,
});

const handleStartPause = ({ event, dispatch, readerState }) => {
  event.preventDefault(); // Do not re-load page
  if (readerState === "ACTIVE") {
    dispatch(readerPause);
  } else {
    dispatch(readerStart);
  }
};

const handleChange = ({ event, dispatch }) =>
  dispatch(inputOnChange(event.target.value));

const handleReset = ({ dispatch }) => dispatch(readerStop);

const sliderOnChange = ({ dispatch, event }) =>
  dispatch(wpmOnChange(event.target.value));

const InputSection = ({ dispatch, userInput, wpm, readerState, wordIndex }) => {
  const wordTicker = (readerState === "INACTIVE") ? null : f(
    "div",
    { id: "output" },
    f(WordTicker, {
      dispatch,

      // Props
      userInput,
      wpm,
      wordIndex,
      readerState,

      // Actions
      readerIncWord,
      readerStop
    })
  );

  console.log("Reader state", readerState);

  return f(
    "div",
    { id: "inner" },
    wordTicker,
    f(WordCounter, { userInput }, null),
    f(
      "form",
      {
        onSubmit: event => handleStartPause({ event, dispatch, readerState }),
      },
      f(Textarea,
        {
          className: (readerState === "ACTIVE") ? "hide" : "",
          onChange: event => handleChange({ event, dispatch }),
          value: userInput,
          wordIndex
        }
      ),
      f(
        "div",
        null,
        f(
          Slider,
          {
            wpm,
            onChange: event => sliderOnChange({ event, dispatch }),
            disabled: readerState === "ACTIVE"
          },
          null
        )
      ),
      f(
        "button",
        {
          id: "btn-submit",
          className: "btn",
          type: "submit"
        },
        readerState === "ACTIVE" ? "Pause" : "Start"
      ),
      f(
        "button",
        {
          id: "btn-clear",
          className: "btn",
          type: "button",
          onClick: () => handleReset({ dispatch })
        },
        "Reset"
      )
    )
  );
};

export default connect(mapStateToProps)(InputSection);
