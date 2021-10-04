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
    dispatch(reset('coordinate-filter-form'));


const CoordinateFilterForm = (props) => {
    const {handleSubmit, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <h3>Select movies with x in range</h3>
            <div className="range-container">
                <Field name="xfrom" type="text"
                       component={numberField} label="from"
                       validate={[required]}
                />
                <div> —</div>
                <Field name="xto" type="text"
                       component={numberField} label="to"
                       validate={[required]}
                />
            </div>
            <h3>Select movies with y in range</h3>
            <div className="range-container">
                <Field name="yfrom" type="text"
                       component={numberField} label="from"
                       validate={[required]}
                />
                <div> —</div>
                <Field name="yto" type="text"
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
    form: 'coordinate-filter-form',
    onSubmitSuccess: afterSubmit,
})(CoordinateFilterForm)