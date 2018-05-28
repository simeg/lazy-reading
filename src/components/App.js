import React from 'react'
import InputSection from '../containers/InputSection'
import OutputSection from '../containers/OutputSection'

const f = React.createElement

const App = () => (
  f('div', { id: 'outer' },
    f(InputSection, null),
    f(OutputSection, null)
  )
)

export default App
