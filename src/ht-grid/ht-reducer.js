import { merge, append } from 'ramda'

import { HT } from './ht-actions'
import { getObjectData } from '../utils'

const dataSize = 10

const initialState = {
  data: getObjectData(dataSize),
  colHeaders: true,
  readOnly: false,
  height: 500
}

// Action reducers for callbacks triggered by Handsontable
export const htReducer = (state = initialState, action) => {
  switch (action.type) {
    case HT.UPDATE:
      console.time('updateData')
      const newData = state.data.slice(0)

      for (let [row, column, oldValue, newValue] of action.dataChanges) {
        newData[row][column] = newValue
      }

      const newState = merge(state, {
        data: newData
      })

      console.timeEnd('updateData')
      return newState

    case 'updateReadOnly':
      return merge(state, {
        readOnly: action.readOnly
      })

    case HT.CREATE:
      return merge(state, {
        data: append(getObjectData(1, state.data.length + 1)[0], state.data)
      })

    default:
      return state
  }
}
