import React, {useEffect} from 'react'
import {Field, reduxForm} from 'redux-form'
import '../../css/app.css';
import '../../css/edit-form.css';
import {useDispatch, useSelector} from "react-redux";
import {renderedInputField} from "../customFormComponents/rendetedInputField";
import {getSingleLocation} from "../../actions/locationsActions";

const LocationEditForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, id} = props
    const dispatch = useDispatch();
    const location = useSelector(state => state.location.editedLocation);

    useEffect(() => {
        dispatch(getSingleLocation(id));
    }, []);

    useEffect(() => {
        props.reset();
        props.initialize({
            id: location.id,
            x: location.x,
            y: location.y,
            name: location.name
        });
    }, [location])

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
    form: 'edit-location-form',
    keepDirtyOnReinitialize: true
})(LocationEditForm)