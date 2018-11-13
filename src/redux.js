import {combineReducers} from 'redux'
import { getArrayData, getObjectData } from './utils'

const dataSize = 10000

const initialReduxStoreState = {
  data: getArrayData(dataSize),
  colHeaders: true,
  rowHeaders: true,
  readOnly: false,
  height: 500
}

// Action reducers for callbacks triggered by Handsontable
const handsontableReducer = (state = initialReduxStoreState, action) => {
  switch (action.type) {
    case 'updateData':
      console.time('updateData')
      const newData = state.data.slice(0)

      for (let [row, column, oldValue, newValue] of action.dataChanges) {
        newData[row][column] = newValue
      }

      const newState = Object.assign({}, state, {
        data: newData
      })

      console.timeEnd('updateData')
      return newState
    case 'updateReadOnly':
      return Object.assign({}, state, {
        readOnly: action.readOnly
      })
    default:
      return state
  }
}

export const updateDataAction = dataChanges => ({
  type: 'updateData',
  dataChanges
})

export const updateReadOnlyAction = readOnly => ({
  type: 'updateReadOnly',
  readOnly
})

export const reducer = combineReducers({
  handsontable: handsontableReducer,
  ag: () => getObjectData(dataSize)
})
