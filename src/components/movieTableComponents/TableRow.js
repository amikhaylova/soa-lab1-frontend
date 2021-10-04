import '../../css/table-row.css';
import '../../css/app.css';
import {FaEdit, FaTrashAlt} from 'react-icons/fa';
import {useDispatch} from "react-redux";
import {deleteMovie} from "../../actions/movieActions";
import {useHistory} from "react-router-dom";

function TableRow(props) {
    const movie = props.movie;
    const movieId = movie.id;
    const dispatch = useDispatch();
    const history = useHistory();

    function deleteHandler(id) {
        dispatch(deleteMovie(id));
    }

    function editHandler(id) {
        history.push("/soa-lab1/edit/" + id);
    }


    return (
        <div className="table-row base">
            <div className="id-div">{movieId}</div>
            <div>{movie.name}</div>
            <div>({movie.coordinates.x} ; {movie.coordinates.y})</div>
            <div>{movie.creationDate}</div>
            <div>{movie.oscarsCount}</div>
            <div>{movie.duration}</div>
            <div>{movie.genre.toLowerCase()}</div>
            <div>{movie.mpaaRating}</div>
            <div>{movie.screenWriter === undefined ? "null" : movie.screenWriter.name}</div>
            <div className="action-div">
                <div onClick={() => editHandler(movieId)}>
                    <FaEdit color="#3DC937FF" className="pointer icon"/>
                </div>
                <div onClick={() => deleteHandler(movieId)}>
                    <FaTrashAlt className="pointer icon" color="#EB6767FF"/>
                </div>
            </div>
        </div>
    );
}

export default TableRow;
