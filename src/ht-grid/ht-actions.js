export const HT = {
  'CREATE': 'HT_CREATE',
  'READ': 'HT_READ',
  'UPDATE': 'HT_UPDATE',
  'DELETE': 'HT_DELETE'
}

export const createAction = () => ({
  type: HT.CREATE
})

export const updateAction = dataChanges => ({
  type: HT.UPDATE,
  dataChanges
})

export const updateReadOnlyAction = readOnly => ({
  type: 'updateReadOnly',
  readOnly
})
