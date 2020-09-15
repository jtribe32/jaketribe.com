import React from 'react'
import ReactDOM from 'react-dom'

import Home from './pages'

// Render your app
if (typeof document !== 'undefined') {
  ReactDOM.render(<Home />, document.getElementById('root'))
}
