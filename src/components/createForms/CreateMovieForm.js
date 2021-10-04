import React, {useEffect} from 'react'
import {Field, reduxForm} from 'redux-form'
import '../../css/app.css';
import '../../css/edit-form.css';
import {useDispatch, useSelector} from "react-redux";
import {renderedInputField} from "../customFormComponents/rendetedInputField";
import {genres, rating} from "../../constants/enumConstants";
import {getCoordinates} from "../../actions/coordinatesActions";
import {getPerson} from "../../actions/personsActions";

const CreateMovieForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, id} = props
    const dispatch = useDispatch();
    const genre = useSelector(state => state.movies.editedMovie.genre);
    const coordinatesList = useSelector(state => state.coordinates.coordinatesList);
    const personList = useSelector(state => state.person.personsList);

    useEffect(() => {
        dispatch(getCoordinates());
        dispatch(getPerson());
    }, []);

    useEffect(() => {
        props.reset();
        props.initialize({
            genre: genres[0],
            mpaaRating: rating[0],
            coordinates: coordinatesList[0].id,
            screenwriter: personList[0].id
        });
    }, [coordinatesList, personList])

    return (
        <form onSubmit={handleSubmit} id={"movie-form"}>
            <div className={"movie-form"}>
                <h3>Movie</h3>
                <Field name="name" type="text"
                       component={renderedInputField} label="Name"
                    /* validate={[required]}*/
                />
                <Field name="oscarsCount" type="number"
                       component={renderedInputField} label="Oscars"
                    /* validate={[required]}*/
                />
                <Field name="duration" type="number"
                       component={renderedInputField} label="Duration (minutes)"
                    /*validate={[required]}*/
                />
                <div className="label">Genre</div>
                <Field name="genre"
                       component="select" label="Genre">
                    {genres.map(o => <option key={o} value={o} selected={genre === o}>{o} </option>)}
                </Field>
                <div className="label">Rating</div>
                <Field name="mpaaRating"
                       component="select" label="Rating">
                    {rating.map(o => <option key={o} value={o} selected={genre === o}>{o} </option>)}
                </Field>
                <div>
                    <button id="edit-form-but" disabled={submitting}>Submit</button>
                </div>
            </div>

            <div className={"movie-form"}>
                <h3>Coordinates</h3>
                <div className="label">(X , Y)</div>
                <Field name="coordinates" id="coordinates"
                       component="select" label="Coordinates">
                    {coordinatesList.map(o => <option key={o.id} value={o.id}>({o.x} , {o.y}) </option>)}
                </Field>
            </div>

            <div className={"movie-form"}>
                <h3>Screenwriter</h3>
                <div className="label">Screenwriter's name</div>
                <Field name="screenwriter" id="screenwriter"
                       component="select">
                    {personList.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
                </Field>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'create-movie-form',
})(CreateMovieForm)