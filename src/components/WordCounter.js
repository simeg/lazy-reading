import {createElement as f} from 'react'

const getWordsCount = input => {
  if (!input) return '0 words'
  if (input.trim() === '') return '0 words'

  const filtered = input.trim().split(' ').filter(str => str !== '')
  if (filtered.length === 1) return '1 word'
  return `${filtered.length} words`
}

export default ({userInput}) => (
  f('div', {id: 'word-counter'}, getWordsCount(userInput))
)
