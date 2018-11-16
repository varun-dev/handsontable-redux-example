import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'

import AgGrid from './ag-grid/ag-grid'
import HOTGrid from './ht-grid/ht-grid'

import './index.css'
import { agReducer } from './ag-grid/ag-reducer'
import { htReducer } from './ht-grid/ht-reducer'

const devToolEnahncer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const reducer = combineReducers({
  handsontable: htReducer,
  ag: combineReducers({
    data: agReducer
  })
})
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
