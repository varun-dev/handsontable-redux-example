export const AG = {
  'CREATE': 'AG_CREATE',
  'READ': 'AG_READ',
  'UPDATE': 'AG_UPDATE',
  'DELETE': 'AG_DELETE'
}

export const createAction = () => ({
  type: AG.CREATE
})

export const deleteAction = (ids) => ({
  type: AG.DELETE,
  payload: ids
})

export const updateAction = (id, colId, value) => ({
  type: AG.UPDATE,
  payload: { id, colId, value }
})
