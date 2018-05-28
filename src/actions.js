export const setWordTickerRunning = isRunning => ({
  type: 'WORD_TICKER_RUNNING',
  isRunning,
})

export const inputOnChange = input => ({
  type: 'INPUT_ON_CHANGE',
  input,
})
