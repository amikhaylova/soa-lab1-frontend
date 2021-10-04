import React, {useEffect} from 'react'
import {Field, reduxForm} from 'redux-form'
import '../../css/app.css';
import '../../css/edit-form.css';
import {useDispatch, useSelector} from "react-redux";
import {renderedInputField} from "../customFormComponents/rendetedInputField";
import {getSingleCoordinates} from "../../actions/coordinatesActions";

const EditCoordinatesForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, id} = props
    const dispatch = useDispatch();
    const coordinates = useSelector(state => state.coordinates.editedCoordinates);

    useEffect(() => {
        //dispatch(getSingleMovie(id));
        dispatch(getSingleCoordinates(id));
    }, []);

    useEffect(() => {
        props.reset();
        props.initialize({
            id: coordinates.id,
            x: coordinates.x,
            y: coordinates.y
        });
    }, [coordinates])

    return (
        <form onSubmit={handleSubmit} id={"movie-form"}>
            <div className={"movie-form"}>
                <h3>Coordinates</h3>

                <Field name="x" type="number"
                       component={renderedInputField} label="X"
                    /* validate={[required]}*/
                />
                <Field name="y" type="number"
                       component={renderedInputField} label="Y"
                    /*validate={[required]}*/
                />
                <div>
                    <button id="edit-form-but" disabled={submitting}>Submit</button>
                </div>
            </div>

        </form>
    )
}

export default reduxForm({
    form: 'edit-coordinates-form',
    keepDirtyOnReinitialize: true
})(EditCoordinatesForm)