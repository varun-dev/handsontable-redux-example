import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { prop } from 'ramda'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import Toolbar from '../components/toolbar'
import { fields } from '../utils'
import { createAction, deleteAction } from './ag-actions'

class AgGrid extends Component {
  constructor(props) {
    super(props);
    this.api = React.createRef()
    this.state = {
      columnDefs: ['id', ...fields].map(key => ({ headerName: key, field: key, editable: true }))
    }
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
    );
  }
}

AgGrid.propTypes = {
  data: PropTypes.array,
  createAction: PropTypes.func,
  deleteAction: PropTypes.func
}

const mapDispatchToProps = {
  createAction,
  deleteAction
}

const mapStateToProps = (state) => ({ data: state.ag.data })

export default connect(mapStateToProps, mapDispatchToProps)(AgGrid)