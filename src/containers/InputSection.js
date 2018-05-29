import { createElement as f } from "react";
import { connect } from "react-redux";
import Slider from "../components/Slider";
import Textarea from "../components/Textarea";
import WordCounter from "../components/WordCounter";
import WpmDropdown from "../components/WpmDropdown";
import { inputOnChange, setWordTickerRunning, wpmOnChange } from "../actions";

const mapStateToProps = state => ({
  userInput: state.reducer.userInput,
  wpm: state.reducer.wpm
});

const handleSubmit = ({ event, dispatch }) => {
  event.preventDefault(); // Do not re-load page
  dispatch(setWordTickerRunning(true));
};

const handleChange = ({ event, dispatch }) =>
  dispatch(inputOnChange(event.target.value));

const handleWpmChange = ({ event, dispatch }) =>
  dispatch(wpmOnChange(event.target.value));

const handleStop = ({ dispatch }) => dispatch(setWordTickerRunning(false));

const sliderOnChange = ({ dispatch, event }) =>
  dispatch(wpmOnChange(event.target.value));

const InputSection = ({
  dispatch,
  autoFocus,
  placeholder,
  required,
  userInput,
  wpm
}) => {
  return f(
    "div",
    { id: "inner" },
    f(WordCounter, { userInput }, null),
    f(
      "form",
      {
        onSubmit: event => handleSubmit({ event, dispatch })
      },
      f(Textarea, {
        autoFocus,
        onChange: event => handleChange({ event, dispatch }),
        placeholder,
        required,
        value: userInput
      }),
      f(
        "div",
        null,
        f(
          Slider,
          { wpm, onChange: event => sliderOnChange({ event, dispatch }) },
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
        "Start"
      ),
      f(
        "button",
        {
          id: "btn-clear",
          className: "btn",
          type: "button",
          onClick: () => handleStop({ dispatch })
        },
        "Stop"
      ),
      f(
        WpmDropdown,
        { onChange: event => handleWpmChange({ event, dispatch }) },
        null
      )
    )
  );
};

export default connect(mapStateToProps)(InputSection);
