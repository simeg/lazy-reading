import { createElement as f, Component } from 'react'

// I'm forced to use a Class here to use `componentDidMount()`
// which I need for dealing with `setInterval()`
export default class WordTicker extends Component {
  constructor (props) {
    super(props)
    this.state = { counter: 0 }
  }

  calculateTimeout (wpm) {
    return (600 / (wpm / 100))
  }

  componentDidMount () {
    const wordList = this.props.input.split(' ')

    this.interval = setInterval(() => {
      const counter = this.state.counter
      if (counter >= wordList.length) {
        this.componentWillUnmount()
        this.props.dispatch(this.props.setWordTickerRunning(false))
      } else {
        this.setState({ word: wordList[counter], counter: counter + 1 })
      }
    }, this.calculateTimeout(this.props.wpm))
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      f('div', { id: 'letter-ticker' }, this.state.word)
    )
  }
}
