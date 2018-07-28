import { createElement as f, Component } from "react";

// TODO: Clean up state handling in this component,
// it's a bit messy right now but focus is speed

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
    const wordList = this.props.userInput.split(" ");

    // Use setTimeout() in order to change 
    const arr = [{ text: 'hello', time: 500}, { text: 'my', time: 800}, { text: 'super', time: 1000}, { text: 'world', time: 300}];

    const delay = (list, index) => {
      console.log(list[index].text);
      if (list.length === index+1) return;
      setTimeout(() => delay(list, index+1), list[index+1].time);
    };

    setTimeout(() => delay(arr, 0), 500);

    this.interval = setInterval(() => {
      const counter = this.props.wordIndex;
      if (counter >= wordList.length) {
        this.componentWillUnmount();
        this.props.dispatch(this.props.readerStop);
      } else {
        // Enable pausing state
        if (this.props.readerState !== "ACTIVE") {
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

  renderWord(word, readerState) {
    if (!word || readerState === "INACTIVE") return null;
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
      {
        id: "letter-ticker",
        className: (this.props.readerState === "ACTIVE") ? "" : "hide"
      },
      this.renderWord(this.state.word, this.props.readerState)
    );
  }
}
