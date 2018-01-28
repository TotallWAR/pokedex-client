import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RenderTextField from './TextField'
import { colors } from '../../../constants/style'

const styles = {

  underlineFocusStyle: {
    borderColor: colors.greenLight
  },
  floatingLabelFocusStyle: {
    color: colors.greenLight
  },
  buttonStyle: {
    background: colors.greenLight
  }
}

let disabled = true

const validate = values => {
  const errors = {}
  const requiredFields = [
    'email',
    'password'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  disabled = !!Object.keys(errors).length
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

let FormLogin = props => {
  const {handleSubmit} = props
  return (
    <form
      className="form-register"
      onSubmit={handleSubmit}>
      <div className='input-group'>
        <div className='field-wrapper'>
          <Field
            name="email"
            component={RenderTextField}
            label="Email"
            underlineFocusStyle={styles.underlineFocusStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}

          />
        </div>
        <div className='field-wrapper'>
          <Field
            name="password"
            component={RenderTextField}
            underlineFocusStyle={styles.underlineFocusStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            label="Password"
            withRef
          />
        </div>
      </div>

      <div className='btn-group d-flex justify-content-end'>
        <RaisedButton
          label={'Login'}
          onClick={handleSubmit}
          primary
          disabled={disabled}
        />
      </div>
    </form>
  )
}

FormLogin.propTypes = {
  handleSubmit: PropTypes.func
}

FormLogin = reduxForm({
  form: 'FormLogin',
  validate
})(FormLogin)

// You have to connect() to any reducers that you wish to connect to yourself
FormLogin = connect(

)(FormLogin)

export default FormLogin
