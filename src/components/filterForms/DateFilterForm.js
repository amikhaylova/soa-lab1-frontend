import React from 'react'
import {Field, reduxForm, reset} from 'redux-form'
import '../../css/app.css';
import '../../css/filter.css';
import moment from 'moment';

const dateField = ({input, label, type, onKeyDown, meta: {touched, error, warning}}) => (
    <div className="date-box">
        <input {...input} placeholder={label} type={type} onKeyDown={onKeyDown}
               className={touched && error ? "input-error" : ""}/>
        {touched && ((error && <span className="error">{error}</span>) || (warning &&
            <span className="error">{warning}</span>))}
    </div>
)

const required = value => value ? undefined : 'Required'

const validDate = value => {
    if (moment(value, 'DD/MM/YYYY', true).isValid())
        return undefined;
    else
        return "Date is incorrect";
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('id-filter-form'));

const onKeyDown = (ev) => {
    var keycode;
    if (window.event)
        keycode = window.event.keyCode;
    else if (ev)
        keycode = ev.which;
    let ipLength = ev.target.value.length;
    if (keycode !== 8) {
        if (ipLength === 2 || ipLength === 5) {
            ev.target.value += '/';
        }
    }
};


const IdFilterForm = (props) => {
    const {handleSubmit, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <h3>Select movies with date in range</h3>
            <div className="date-range-container">
                <Field name="from" type="text"
                       component={dateField} label="DD/MM/YYYY"
                       onKeyDown={onKeyDown}
                       validate={[required, validDate]}
                />
                <div id="date-dash"> —</div>
                <Field name="to" type="text"
                       component={dateField} label="DD/MM/YYYY"
                       onKeyDown={onKeyDown}
                       validate={[required, validDate]}
                />
            </div>
            <div>
                <button id="ok-but" disabled={submitting}>OK</button>
            </div>
        </form>
    )
}


export default reduxForm({
    form: 'id-filter-form',
    onSubmitSuccess: afterSubmit,
})(IdFilterForm)