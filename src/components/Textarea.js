import { createElement as f } from 'react'

export default ({ onChange, value }) => {
  return (
    f('textarea',
      {
        autoFocus: true,
        onChange,
        placeholder: 'Enter a text you want to lazy read..',
        required: true,
        value,
      }
    )
  )
}
