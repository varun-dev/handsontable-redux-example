import Handsontable from 'handsontable'
import {combineReducers} from 'redux'
import faker from 'faker'

const dataSize = 10000

const initialReduxStoreState = {
  data: getData(),
  colHeaders: true,
  rowHeaders: true,
  readOnly: false,
  height: 500
}

// Action reducers for callbacks triggered by Handsontable
const updatesReducer = (state = initialReduxStoreState, action) => {
  switch (action.type) {
    case 'updateData':
      const newData = state.data.slice(0)

      for (let [row, column, oldValue, newValue] of action.dataChanges) {
        newData[row][column] = newValue
      }

      return Object.assign({}, state, {
        data: newData
      })
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
export const reducer = combineReducers({updates: updatesReducer})

function getData() {
  return new Array(dataSize).fill(null)
    .map(e => e = faker.fake(
      "{{name.lastName}}, " +
      "{{name.firstName}}, " +
      "{{name.lastName}}, " +
      "{{name.jobTitle}}, " +
      "{{name.prefix}}, " +
      "{{name.suffix}}, " +
      "{{name.title}}, " +
      "{{name.jobDescriptor}}, " +
      "{{name.jobArea}}, " +
      "{{name.suffix}}"
    ).split(','))
}
