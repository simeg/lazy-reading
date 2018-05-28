import { createElement as f } from 'react'
import { connect } from 'react-redux'
import WordTicker from '../components/WordTicker'
import { setWordTickerRunning } from '../actions'

const mapStateToProps = state => ({
  input: state.reducer.userInput,
  timeoutMs: state.reducer.timeoutMs,
  isRunning: state.reducer.isTickerRunning
})

const Output = ({ dispatch, input, timeoutMs = false, isRunning }) => {
  if (!isRunning) return null
  return f('div', { id: 'output' },
    f(WordTicker, { dispatch, input, timeoutMs, setWordTickerRunning })
  )
}

export default connect(
  mapStateToProps
)(Output)
