import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

export default function Toolbar (props) {
  return (
    <div>
      <Button onClick={props.onCreate}>Create</Button>
      <Button>Read</Button>
      <Button>Update</Button>
      <Button onClick={props.onDelete}>Delete</Button>
    </div>
  )
}

Toolbar.propTypes = {
  onCreate: PropTypes.func,
  onDelete: PropTypes.func
}
