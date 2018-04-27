import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }    
    return errors
}

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error}
}) => (
    <div>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <p className="error">{error}</p>))}
        </div>
    </div>
)


var loginForm = (props) => {

    const { handleSubmit,buttonText } = props

  return (
    <form onSubmit={handleSubmit}>
        <div className="login-div shadow ">
            <div className="login-form">
                <p className="login_statement">LOGIN TO THE WORLD OF STARWARS</p>
                <div className="field">
                    <Field name="username" component={renderField} label="Username" type="text" />
                </div>
                <div className="field">
                    <Field name="password" component={renderField} label="password" type="password" />
                </div>
                <button type="submit" className="shadow primaryColor">{buttonText}</button>
            </div>
        </div>
    </form>
  )
}

export default reduxForm({
  form: 'loginForm', 
  validate, 
})(loginForm)
