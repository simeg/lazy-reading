import { createElement as f } from "react";
import { connect } from "react-redux";
import Slider from "../components/Slider";
import Textarea from "../components/Textarea";
import WordCounter from "../components/WordCounter";
import {
  inputOnChange,
  setWordTickerRunning,
  wpmOnChange,
  readerStop
} from "../actions";

const mapStateToProps = state => ({
  userInput: state.reducer.userInput,
  wpm: state.reducer.wpm,
  isTickerRunning: state.reducer.isTickerRunning
});

const handleStartPause = ({ event, dispatch, isTickerRunning }) => {
  event.preventDefault(); // Do not re-load page
  if (isTickerRunning) {
    dispatch(setWordTickerRunning(false));
  } else {
    dispatch(setWordTickerRunning(true));
  }
};

const handleChange = ({ event, dispatch }) =>
  dispatch(inputOnChange(event.target.value));

const handleReset = ({ dispatch }) => dispatch(readerStop);

const sliderOnChange = ({ dispatch, event }) =>
  dispatch(wpmOnChange(event.target.value));

const InputSection = ({ dispatch, userInput, wpm, isTickerRunning }) => {
  return f(
    "div",
    { id: "inner" },
    f(WordCounter, { userInput }, null),
    f(
      "form",
      {
        onSubmit: event =>
          handleStartPause({ event, dispatch, isTickerRunning })
      },
      f(Textarea, {
        onChange: event => handleChange({ event, dispatch }),
        value: userInput
      }),
      f(
        "div",
        null,
        f(
          Slider,
          {
            wpm,
            onChange: event => sliderOnChange({ event, dispatch }),
            disabled: !!isTickerRunning
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
        isTickerRunning ? "Pause" : "Start"
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
