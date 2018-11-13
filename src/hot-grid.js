import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {HotTable} from '@handsontable/react'

import { updateDataAction, updateReadOnlyAction } from './redux'
import 'handsontable/dist/handsontable.min.css'

class MyComponent extends React.Component {
  constructor(props) {
    super(props)

    this.toggleReadOnly = this.toggleReadOnly.bind(this)
    this.hotTableComponent = React.createRef()
  }

  onBeforeHotChange = (changes, source) => {
    this.props.updateData(changes)
    return false
  }

  toggleReadOnly(event) {
    this.props.updateReadOnly(event.target.checked)
  }

  render() {
    return (
      <div className="redux-example-container">
        <div id="example-container">
          <div id="example-preview" className="hot">
            <div id="toggle-boxes">
              <br/>
              <input
                onClick={this.toggleReadOnly}
                id="readOnlyCheck"
                type="checkbox"
              />
              <label htmlFor="readOnlyCheck" >
                Toggle <code>readOnly</code> for the entire table
              </label>
            </div>
            <br/>
            <HotTable
              ref={this.hotTableComponent}
              beforeChange={this.onBeforeHotChange}
              beforeRender={console.time.bind(null, 'HotRender')}
              afterRender={console.timeEnd.bind(null, 'HotRender')}
              settings={this.props.updates}
            />
          </div>
        </div>
      </div>
    )
  }
}

MyComponent.propTypes = {
  updates: PropTypes.object,
  updateData: PropTypes.func,
  updateReadOnly: PropTypes.func
}

const mapStateToProps = (state) => ({ updates: state.handsontable })

const mapDispatchToProps = ({
  updateData: updateDataAction,
  updateReadOnly: updateReadOnlyAction
})

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)