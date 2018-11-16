
let _afterEnd

export default function getEditor(afterEnd) {
  _afterEnd = afterEnd
  return MyCellEditor
}

function MyCellEditor () {}

// gets called once before the renderer is used
MyCellEditor.prototype.init = function(params) {
  // create the cell
  this.eInput = document.createElement('input');
  this.eInput.value = params.value;
  this.id = params.node.id
  this.colId = params.column.colId
};

// gets called once when grid ready to insert the element
MyCellEditor.prototype.getGui = function() {
  return this.eInput;
};

// focus and select can be done after the gui is attached
MyCellEditor.prototype.afterGuiAttached = function() {
  this.eInput.focus();
  this.eInput.select();
};

// returns the new value after editing
MyCellEditor.prototype.getValue = function() {
  return this.eInput.value;
};

// any cleanup we need to be done here
MyCellEditor.prototype.destroy = function() {
  // but this example is simple, no cleanup, we could
  // even leave this method out as it's optional
};

// if true, then this editor will appear in a popup
MyCellEditor.prototype.isPopup = function() {
  // and we could leave this method out also, false is the default
  return false;
};

MyCellEditor.prototype.isCancelAfterEnd = function() {
  // and we could leave this method out also, false is the default
  _afterEnd(this.id, this.colId, this.getValue())
  return true;
};
