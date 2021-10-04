import React from 'react'
import {Field, reduxForm, reset} from 'redux-form'
import '../../css/app.css';
import '../../css/filter.css';

const afterSubmit = (result, dispatch) =>
    dispatch(reset('genre-filter-form'));

const validateRadioGroupIsNotEmpty = values => {
    let errors = {};
    if (!values.compare) {
        errors.compare = 'Required';
    }
    return errors;
};

const GenreFilterForm = (props) => {
    const {handleSubmit, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <h3>Select movies with genre</h3>
            <div className="radio-group">
                <label><Field name="compare" component="input" type="radio" value="DRAMA"/>Drama</label>
                <label><Field name="compare" component="input" type="radio" value="TRAGEDY"/>Tragedy</label>
                <label><Field name="compare" component="input" type="radio" value="HORROR"/>Horror</label>
                <label><Field name="compare" component="input" type="radio" value="FANTASY"/>Fantasy</label>
            </div>
            <div>
                <button id="ok-but" disabled={submitting}>OK</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'genre-filter-form',
    onSubmitSuccess: afterSubmit,
    validate: validateRadioGroupIsNotEmpty
})(GenreFilterForm)