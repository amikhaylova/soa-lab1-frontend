import React from 'react'
import {Field, reduxForm, reset} from 'redux-form'
import '../../css/app.css';
import '../../css/filter.css';

const numberField = ({input, type, meta: {touched, error, warning}}) => (
    <div className="number-box">
        <input {...input} type={type}
               className={touched && error ? "input-error" : ""}/>
    </div>
)

const required = value => value ? undefined : 'Required'

const afterSubmit = (result, dispatch) =>
    dispatch(reset('duration-filter-form'));


const DurationFilterForm = (props) => {
    const {handleSubmit, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <h3>Select movies with duration (min) in range</h3>
            <div className="range-container">
                <Field name="from" type="text"
                       component={numberField} label="from"
                       validate={[required]}
                />
                <div> —</div>
                <Field name="to" type="text"
                       component={numberField} label="to"
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
    form: 'duration-filter-form',
    onSubmitSuccess: afterSubmit,
})(DurationFilterForm)