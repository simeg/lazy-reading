import React from 'react'
import Input from '../containers/Input'
import Output from '../containers/Output'

const f = React.createElement

const App = () => (
  f('div', { id: 'outer' },
    f(Input, null),
    f(Output, null)
  )
)

export default App
