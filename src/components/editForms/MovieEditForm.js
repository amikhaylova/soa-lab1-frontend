import React, {useEffect} from 'react'
import {Field, reduxForm} from 'redux-form'
import '../../css/app.css';
import '../../css/edit-form.css';
import {useDispatch, useSelector} from "react-redux";
import {getSingleMovie} from "../../actions/movieActions";
import {renderedInputField} from "../customFormComponents/rendetedInputField";
import {genres, rating} from "../../constants/enumConstants";
import {required} from "../../validators/required";
import {getCoordinates} from "../../actions/coordinatesActions";
import {useHistory} from "react-router-dom";
import {getPerson} from "../../actions/personsActions";

const MovieEditForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, id} = props
    const dispatch = useDispatch();
    const movieId = useSelector(state => state.movies.editedMovie.id);
    const name = useSelector(state => state.movies.editedMovie.name);
    const oscarsCount = useSelector(state => state.movies.editedMovie.oscarsCount);
    const duration = useSelector(state => state.movies.editedMovie.duration);
    const creationDate = useSelector(state => state.movies.editedMovie.creationDate);
    const genre = useSelector(state => state.movies.editedMovie.genre);
    const mpaaRating = useSelector(state => state.movies.editedMovie.mpaaRating);
    const coordinates = useSelector(state => state.movies.editedMovie.coordinates);
    //const coordinatesId = useSelector(state => state.movies.editedMovie.coordinates.id);
    const screenwriter = useSelector(state => state.movies.editedMovie.screenWriter);
    // const location = useSelector(state => state.movies.editedMovie.screenWriter.location);
    const coordinatesList = useSelector(state => state.coordinates.coordinatesList);
    const locationList = useSelector(state => state.location.locationsList);
    const personList = useSelector(state => state.person.personsList);
    const history = useHistory();
    //const selectedCoordinates = useSelector(state => state.form.edit-movie-form.values.coordinates)

    useEffect(() => {
        dispatch(getSingleMovie(id));
        dispatch(getCoordinates());
        //dispatch(getLocations());
        dispatch(getPerson());
    }, []);

    function handleEditCoordSubmit(evt) {
        evt.preventDefault();
        let element = document.getElementById("coordinates");
        history.push("/soa-lab1/coordinates/edit/" + element.value);
    }

    function handleCreateCoordSubmit(evt) {
        evt.preventDefault();
        history.push("/soa-lab1/coordinates/new");
    }

    function handleEditPersonSubmit(evt) {
        evt.preventDefault();
        let element = document.getElementById("screenwriter");
        history.push("/soa-lab1/person/edit/" + element.value);
    }

    function handleCreatePersonSubmit(evt) {
        evt.preventDefault();
        history.push("/soa-lab1/person/new");
    }


    useEffect(() => {
        props.reset();
        props.initialize({
            name: name,
            id: movieId,
            oscarsCount: oscarsCount,
            duration: duration,
            creationDate: creationDate,
            genre: genre,
            mpaaRating: mpaaRating,
            coordinates: coordinates.id,
            screenwriter: screenwriter.id,
        });
    }, [id, name, oscarsCount, duration, genre, mpaaRating, coordinates, screenwriter])

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
                    /*  validate={[required]}*/
                />
                <Field name="duration" type="number"
                       component={renderedInputField} label="Duration (minutes)"
                    /*validate={[required]}*/
                />
                <Field name="creationDate" type="text"
                       component={renderedInputField} label="Creation date"
                       readonly="readonly"
                    /* validate={[required]}*/
                />
                <div className="label">Genre</div>
                <Field name="genre"
                       component="select" label="Genre">
                    {genres.map(o => <option key={o} value={o} selected={genre === o}>{o} </option>)}
                </Field>
                <div className="label">Rating</div>
                <Field name="mpaaRating"
                       component="select" label="Rating" validate={[required]}>
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
                <div className={"buttons-div"}>
                    <div>
                        <button id={"edit-form-but"} onClick={handleEditCoordSubmit}>Edit</button>
                    </div>
                    <div>
                        <button id={"edit-form-but"} onClick={handleCreateCoordSubmit}>Create</button>
                    </div>
                </div>

            </div>

            <div className={"movie-form"}>
                <h3>Screenwriter</h3>
                <div className="label">Screenwriter's name</div>
                <Field name="screenwriter" id="screenwriter"
                       component="select">
                    {personList.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
                </Field>
                <div className={"buttons-div"}>
                    <div>
                        <button id={"edit-form-but"} onClick={handleEditPersonSubmit}>Edit</button>
                    </div>
                    <div>
                        <button id={"edit-form-but"} onClick={handleCreatePersonSubmit}>Create</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'edit-movie-form',
    keepDirtyOnReinitialize: true
})(MovieEditForm)