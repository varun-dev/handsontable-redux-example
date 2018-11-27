import { fields } from '../utils'
import { PopupTextEditor, TextEditor } from './ag-cell-editors'

export const getColumnsDefs = onChange => ['id', ...fields].map(key => {
  const def = {
    headerName: key,
    field: key,
    editable: true
  }
  if (key === 'lastName') def.cellEditor = TextEditor(onChange)
  else if (key === 'jobDescriptor') def.cellEditor = PopupTextEditor(onChange)
  return def
})
