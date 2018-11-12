import React from 'react'
import { Provider, connect } from 'react-redux'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {createStore} from 'redux'
import {HotTable} from '@handsontable/react'
import 'handsontable/dist/handsontable.min.css'

import { reducer, updateDataAction, updateReadOnlyAction } from './redux'

const devToolEnahncer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, devToolEnahncer)

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

const mapStateToProps = (state) => ({ updates: state.updates })

const mapDispatchToProps = ({
  updateData: updateDataAction,
  updateReadOnly: updateReadOnlyAction
})

const Component = connect(mapStateToProps, mapDispatchToProps)(MyComponent)
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'))
}

render()

