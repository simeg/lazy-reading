export const setWordTickerRunning = isRunning => ({
  type: "WORD_TICKER_RUNNING",
  isRunning
});

export const inputOnChange = input => ({
  type: "INPUT_ON_CHANGE",
  input
});

export const wpmOnChange = wpm => ({
  type: "WPM_ON_CHANGE",
  wpm
});
