import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import configurestore from './redux/configurestore'
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={configurestore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
