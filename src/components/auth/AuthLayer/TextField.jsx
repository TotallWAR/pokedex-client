import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'

export default ({input, label, meta: {touched, error}, ...custom}) => {
  return (<TextField hintText={''}
                     floatingLabelText={label}
                     errorText={touched && error}
                     {...input}
                     {...custom}
  />)
}
