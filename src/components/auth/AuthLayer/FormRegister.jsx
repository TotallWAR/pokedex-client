import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RenderTextField from './TextField'
import { normalizePhone } from '../../../formNormalizes/index'
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
    'phone',
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
  if (values.phone) {
    let phone = values.phone.trim().replace(/\(|\)|\-| +/g, '')
    if (!/^((\+7|7|8)+([0-9]){10})$/i.test(phone)) {
      errors.phone = 'Invalid russian phone format'
    }
  }

  return errors
}

let FormRegister = props => {
  const {handleSubmit} = props
  return (
    <form
      className="form-register"
      id=""
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
            name="phone"
            component={RenderTextField}
            label="Phone"
            normalize={normalizePhone()}
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
            // ref={(el) => }
            withRef
          />
        </div>
      </div>

      <div className='btn-group d-flex justify-content-end'>
        <RaisedButton
          label={'Register'}
          onClick={handleSubmit}
          primary disabled={disabled}
        />
      </div>
    </form>
  )
}

FormRegister.propTypes = {
  handleSubmit: PropTypes.func
}

FormRegister = reduxForm({
  form: 'FormRegister',
  validate
})(FormRegister)

// You have to connect() to any reducers that you wish to connect to yourself
FormRegister = connect(

)(FormRegister)

export default FormRegister
