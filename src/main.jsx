import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
)

const logicElement = document.createElement('div');
logicElement.id = 'logic';
ReactDOM.createRoot(logicElement).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
)

/*ReactDOM.createRoot(document.createElementById('logic')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
)*/