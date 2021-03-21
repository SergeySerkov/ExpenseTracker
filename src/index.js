import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from './context/context'
import App from './App'
import './index.css'

ReactDOM.render(
  <SpeechProvider appId="90ac7045-49b4-4826-a358-91618ea41854" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
)