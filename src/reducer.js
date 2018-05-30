import { combineReducers } from "redux";

export const initialState = {
  wpm: 300,
  wordIndex: 0,

  // TEMPORARY
  userInput: "I these are words that I've written down as an example"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_ON_CHANGE":
      return Object.assign({}, state, { userInput: action.input });
    case "WORD_TICKER_RUNNING":
      if (!state.userInput) return state; // Don't do anything if there's no input
      return Object.assign({}, state, { isTickerRunning: action.isRunning });
    case "WPM_ON_CHANGE":
      return Object.assign({}, state, { wpm: action.wpm });
    case "READER_INCREMENT_WORD":
      return Object.assign({}, state, { wordIndex: state.wordIndex + 1 });
    case "READER_STOP":
      return Object.assign({}, state, { wordIndex: 0, isTickerRunning: false });
    default:
      return state;
  }
};

export default combineReducers({
  reducer
});
