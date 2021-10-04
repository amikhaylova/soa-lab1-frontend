import React from 'react'
import {Field, reduxForm} from 'redux-form'
import '../../css/app.css';
import '../../css/edit-form.css';
import {renderedInputField} from "../customFormComponents/rendetedInputField";

const LocationCreateForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, id} = props


    return (
        <form onSubmit={handleSubmit} id={"movie-form"}>
            <div className={"movie-form"}>
                <h3>Location</h3>
                <Field name="name" type="text"
                       component={renderedInputField} label="Name of location"
                />
                <Field name="x" type="number"
                       component={renderedInputField} label="X"
                />
                <Field name="y" type="number"
                       component={renderedInputField} label="Y"
                />
                <div>
                    <button id="edit-form-but" disabled={submitting}>Submit</button>
                </div>
            </div>

        </form>
    )
}

export default reduxForm({
    form: 'create-location-form',
})(LocationCreateForm)