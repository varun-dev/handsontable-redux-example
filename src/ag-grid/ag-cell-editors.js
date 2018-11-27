import { TextCellEditor, PopupTextCellEditor } from 'ag-grid-community'

function wrapEditor(parent, onChange) {
  return class EditorWrapper extends parent {
    isCancelAfterEnd () {
      onChange(
        this.params.node.id,
        this.params.column.getId(),
        this.getValue()
      )
      return true;
    }
  }
}

export const TextEditor = onChange => wrapEditor(TextCellEditor, onChange)
export const PopupTextEditor = onChange => wrapEditor(PopupTextCellEditor, onChange)
