import { combineReducers } from "redux";

export const initialState = {
  readerState: "INACTIVE",
  wordIndex: 0,
  wpm: 300,

  // TEMPORARY
  userInput: "These are words that I've written down as an example"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_ON_CHANGE":
      return Object.assign({}, state, { userInput: action.input });
    case "WPM_ON_CHANGE":
      return Object.assign({}, state, { wpm: action.wpm });
    case "READER_START":
      return Object.assign({}, state, { readerState: "ACTIVE" });
    case "READER_STOP":
      return Object.assign({}, state, {
        wordIndex: 0,
        readerState: "INACTIVE"
      });
    case "READER_PAUSE":
      return Object.assign({}, state, { readerState: "PAUSED" });
    case "READER_INCREMENT_WORD":
      return Object.assign({}, state, { wordIndex: state.wordIndex + 1 });
    default:
      return state;
  }
};

export default combineReducers({
  reducer
});
