import React from 'react'
import {Field, reduxForm} from 'redux-form'
import '../../css/app.css';
import '../../css/edit-form.css';
import {renderedInputField} from "../customFormComponents/rendetedInputField";

const CreateCoordinatesForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, id} = props

    return (
        <form onSubmit={handleSubmit}>
            <div className={"movie-form"}>
                <h3>Coordinates</h3>
                <Field name="x" type="number"
                       component={renderedInputField} label="X"
                    /*validate={[required]}*/
                />
                <Field name="y" type="number"
                       component={renderedInputField} label="Y"
                    /*  validate={[required]}*/
                />
                <div>
                    <button id="edit-form-but" disabled={submitting}>Submit</button>
                </div>
            </div>

        </form>
    )
}

export default reduxForm({
    form: 'create-coordinates-form',
    keepDirtyOnReinitialize: true
})(CreateCoordinatesForm)