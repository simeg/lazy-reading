import { createElement as f } from "react";
import { connect } from "react-redux";
import Textarea from "../components/Textarea";
import { inputOnChange, setWordTickerRunning, wpmOnChange } from "../actions";
import WpmDropdown from "../components/WpmDropdown";
import WordCounter from "../components/WordCounter";

const mapStateToProps = state => ({
  userInput: state.reducer.userInput,
  autoFocus: state.reducer.inputPlaceholder,
  placeholder: state.reducer.inputPlaceholder,
  required: state.reducer.inputRequired
});

const handleSubmit = ({ event, dispatch }) => {
  // Do not re-load page
  event.preventDefault();
  dispatch(setWordTickerRunning(true));
};

const handleChange = ({ event, dispatch }) =>
  dispatch(inputOnChange(event.target.value));

const handleWpmChange = ({ event, dispatch }) =>
  dispatch(wpmOnChange(event.target.value));

const handleStop = ({ dispatch }) => dispatch(setWordTickerRunning(false));

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
        { wpm, onChange: event => handleWpmChange({ event, dispatch }) },
        null
      )
    )
  );
};

export default connect(mapStateToProps)(InputSection);
