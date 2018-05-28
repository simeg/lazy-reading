import { createElement as f } from 'react'
import { connect } from 'react-redux'
import Textarea from '../components/Textarea'
import { inputOnChange, setWordTickerRunning } from '../actions'

const mapStateToProps = state => ({
  userInput: state.reducer.userInput,
  autoFocus: state.reducer.inputPlaceholder,
  placeholder: state.reducer.inputPlaceholder,
  required: state.reducer.inputRequired
})

const handleSubmit = ({ event, dispatch }) => {
  // Do not re-load page
  event.preventDefault()
  dispatch(setWordTickerRunning(true))
}

const handleChange = ({ event, dispatch }) =>
  dispatch(inputOnChange(event.target.value))

const clearTextarea = ({ dispatch }) => dispatch(inputOnChange(''))

const Input = ({ dispatch, autoFocus, placeholder, required, userInput }) => {
  return (
    f('div', { id: 'inner' },
      f('form', {
        onSubmit: event => handleSubmit({ event, dispatch })
      },
      f(Textarea, {
        autoFocus,
        onChange: event => handleChange({ event, dispatch }),
        placeholder,
        required,
        value: userInput
      }),
      f('button', {
        id: 'btn-submit',
        className: 'btn',
        type: 'submit'
      }, 'Submit'),
      f('button', {
        id: 'btn-clear',
        className: 'btn',
        type: 'button',
        onClick: () => clearTextarea({ dispatch })
      }, 'Clear')
      )
    )
  )
}

export default connect(mapStateToProps)(Input)
