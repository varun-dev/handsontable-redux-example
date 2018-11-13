import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import { reducer } from './redux'
import AgGrid from './ag-grid'
import HOTGrid from './hot-grid'
import './index.css'

const devToolEnahncer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, devToolEnahncer)

ReactDOM.render(
  <Provider store={store}>
    <HOTGrid />
  </Provider>,
  document.getElementById('hot'))

ReactDOM.render(
  <Provider store={store}>
    <AgGrid/>
  </Provider>,
  document.getElementById('ag'))
