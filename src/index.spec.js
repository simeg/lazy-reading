import { inputOnChange, setWordTickerRunning } from "./actions";
import { initialState, reducer } from "./reducer";

describe('actions', () => {
  it('inputOnChange should create INPUT_ON_CHANGE action', () => {
    expect(inputOnChange('specific-input')).toEqual({
      type: 'INPUT_ON_CHANGE',
      input: 'specific-input'
    })
  })

  it('setWordTickerRunning should create WORD_TICKER_RUNNING action', () => {
    expect(setWordTickerRunning('specific-input')).toEqual({
      type: 'WORD_TICKER_RUNNING',
      isRunning: 'specific-input'
    })
  })
})

describe('reducer', () => {
  it('changes nothing on undefined action', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState)
  })

  it('builds correct state for INPUT_ON_CHANGE', () => {
    expect(
      reducer({}, { type: "INPUT_ON_CHANGE", input: 'specific-input' })
    ).toEqual({ userInput: 'specific-input' })
  })

  it('builds correct state for WORD_TICKER_RUNNING', () => {
    expect(
      reducer(
        { userInput: 'arbitrary-value' },
        { type: "WORD_TICKER_RUNNING", isRunning: 'specific-input' }
      )
    ).toEqual({
      isTickerRunning: 'specific-input',
      userInput: 'arbitrary-value',
    })
  })

  it('does not set WORD_TICKER_RUNNING to true when no value present', () => {
    expect(
      reducer(
        { userInput: undefined, isTickerRunning: false },
        { type: "WORD_TICKER_RUNNING", isRunning: true }
      )
    ).toEqual({ isTickerRunning: false })
  })
})
