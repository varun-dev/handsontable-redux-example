import { append } from 'ramda'
import { getObjectData } from '../utils'
import { AG } from './ag-actions'

const initialAgState = getObjectData(10)

export const agReducer = (state = initialAgState, action) => {
  switch (action.type) {
    case AG.CREATE:
      return append(getObjectData(1, state.length + 1)[0], state)

    case AG.DELETE:
      return state

    default:
      return state
  }
}