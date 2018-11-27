import { TextCellEditor, PopupTextCellEditor } from 'ag-grid-community'

export function TextEditor(onChange) {
  return class TextEditor extends TextCellEditor {
    isCancelAfterEnd () {
      onChange(this.id, this.colId, this.getValue())
      return true;
    }
  }
}

export function PopupTextEditor(onChange) {
  return class PopupTextEditor extends PopupTextCellEditor {
    isCancelAfterEnd () {
      onChange(this.id, this.colId, this.getValue())
      return true;
    }
  }
}
