import { append, findIndex, propEq, lensProp, set } from 'ramda'
import { getObjectData } from '../utils'
import { AG } from './ag-actions'

const initialAgState = getObjectData(10)

export const agReducer = (state = initialAgState, action) => {
  switch (action.type) {
    case AG.CREATE:
      return append(getObjectData(1, state.length + 1)[0], state)

    case AG.DELETE:
      return state

    case AG.UPDATE:
      const { id, colId, value } = action.payload
      const index = findIndex(propEq('id', id))(state)
      const row = state[index]
      const newData = state.slice(0)
      newData[index] = set(lensProp(colId), value, row)
      return newData

    default:
      return state
  }
}