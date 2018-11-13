import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { fields } from './utils'

class AgGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: fields.map(key => ({ headerName: key, field: key })),
      rowData: props.data
    }
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: '100%' }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

AgGrid.propTypes = {
  data: PropTypes.array
}

const mapStateToProps = (state) => ({ data: state.ag })

export default connect(mapStateToProps)(AgGrid)