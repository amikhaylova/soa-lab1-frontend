import React from 'react'
import {Field, reduxForm, reset} from 'redux-form'
import '../../css/app.css';
import '../../css/filter.css';

const afterSubmit = (result, dispatch) =>
    dispatch(reset('rating-filter-form'));

const validateRadioGroupIsNotEmpty = values => {
    let errors = {};
    if (!values.compare) {
        errors.compare = 'Required';
    }
    return errors;
};

const RatingFilterForm = (props) => {
    const {handleSubmit, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <h3>Select movies with rating</h3>
            <div className="radio-group">
                <label><Field name="compare" component="input" type="radio" value="G"/>G</label>
                <label><Field name="compare" component="input" type="radio" value="PG"/>PG</label>
                <label><Field name="compare" component="input" type="radio" value="PG_13"/>PG_13</label>
                <label><Field name="compare" component="input" type="radio" value="R"/>R</label>
                <label><Field name="compare" component="input" type="radio" value="NC_17"/>NC_17</label>
                {props.errors && <span className="error">{props.errors}</span>}
            </div>
            <div>
                <button id="ok-but" disabled={submitting}>OK</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'rating-filter-form',
    onSubmitSuccess: afterSubmit,
    validateRadioGroupIsNotEmpty
})(RatingFilterForm)