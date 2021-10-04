import React from 'react'
import {Field, reduxForm, reset} from 'redux-form'
import '../../css/app.css';
import '../../css/filter.css';

const textField = ({input, type, meta: {touched, error, warning}}) => (
    <div className="text-box">
        <input {...input} type={type}
               className={touched && error ? "input-error" : ""}/>
    </div>
)

const required = value => value ? undefined : 'Required'

const afterSubmit = (result, dispatch) =>
    dispatch(reset('name-filter-form'));


const NameFilterForm = (props) => {
    const {handleSubmit, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <h3>Select movies with title like</h3>
            <div className="text-box-container">
                <Field name="like" type="text"
                       component={textField} label="from"
                       validate={[required]}
                />
            </div>
            <div>
                <button id="ok-but" disabled={submitting}>OK</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'name-filter-form',
    onSubmitSuccess: afterSubmit,
})(NameFilterForm)