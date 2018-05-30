import { createElement as f, Component } from "react";

// I'm forced to use a Class here to use `componentDidMount()`
// which I need for dealing with `setInterval()`
export default class WordTicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  calculateTimeout(wpm) {
    return 600 / (wpm / 100);
  }

  componentDidMount() {
    const wordList = this.props.input.split(" ");

    this.interval = setInterval(() => {
      const counter = this.props.wordIndex;
      if (counter >= wordList.length) {
        this.componentWillUnmount();
        this.props.dispatch(this.props.setWordTickerRunning(false));
      } else {
        // Enable pausing output
        if (!this.props.isRunning) {
          return;
        }
        this.setState({ word: wordList[counter] });
        this.props.dispatch(this.props.readerIncWord);
      }
    }, this.calculateTimeout(this.props.wpm));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getHighlightIndex(word) {
    switch (word.length) {
      case 1:
        return 0;
      case 2:
      case 3:
      case 4:
      case 5:
        return 1;
      default:
        return 2;
    }
  }

  renderWord(word, wordIndex) {
    if (!word || wordIndex === 0) return null;
    const index = this.getHighlightIndex(word);

    // TODO: This could be cleaned up
    const pre = f("div", { id: "pre" }, word.slice(0, index));
    const highlight = f("div", { id: "highlight" }, word.charAt(index));
    const post = f("div", { id: "post" }, word.slice(index + 1, word.length));

    return f("div", { id: "word-container" }, pre, highlight, post);
  }

  render() {
    return f(
      "div",
      { id: "letter-ticker" },
      this.renderWord(this.state.word, this.props.wordIndex)
    );
  }
}
