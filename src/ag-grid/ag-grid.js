import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { prop } from 'ramda'

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

import Toolbar from '../components/toolbar'
import { getColumnsDefs } from './ag-grid-columns'
import { createAction, deleteAction, updateAction } from './ag-actions'

class AgGrid extends Component {
  constructor(props) {
    super(props)
    this.api = React.createRef()
    this.state = { columnDefs: getColumnsDefs(this.onChange) }
  }

  onChange = (id, colId, value) => {
    this.props.updateAction(id, colId, value)
  }

  onDelete = () => {
    const selectedIds = this.api.current.api.getSelectedNodes().map(prop('id'))
    this.props.deleteAction(selectedIds)
  }

  render() {
    return (
      <div>
        <Toolbar
          onCreate={this.props.createAction}
          onDelete={this.onDelete}
        />
        <div
          className="ag-theme-balham"
          style={{
            height: '500px',
            width: '100%' }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.props.data}
            deltaRowDataMode={true}
            getRowNodeId={data => data.id}
            enableSorting={true}
            ref={this.api}
            rowSelection='multiple'
          >
          </AgGridReact>
        </div>
      </div>
    )
  }
}

AgGrid.propTypes = {
  data: PropTypes.array,
  createAction: PropTypes.func,
  deleteAction: PropTypes.func,
  updateAction: PropTypes.func
}

const mapDispatchToProps = {
  createAction,
  deleteAction,
  updateAction
}

const mapStateToProps = (state) => ({ data: state.ag.data })

export default connect(mapStateToProps, mapDispatchToProps)(AgGrid)