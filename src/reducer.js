import {combineReducers} from 'redux'

export const initialState = {
  timeoutMs: 250,
  wpm: 100,

  // TEMPORARY
  userInput: "these are words that I've written down as an example"
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_ON_CHANGE':
      return Object.assign({}, state, {userInput: action.input})
    case 'WORD_TICKER_RUNNING':
      if (!state.userInput) return state // Don't do anything if there's no input
      return Object.assign({}, state, {isTickerRunning: action.isRunning})
    case 'WPM_ON_CHANGE':
      return Object.assign({}, state, {wpm: action.wpm})
    default:
      return state
  }
}

export default combineReducers({
  reducer
})
