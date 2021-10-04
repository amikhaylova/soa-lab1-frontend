import "../css/table-row.css"
import '../css/app.css';

function PersonTableRow(props) {
    const person = props.person;
    const personId = person.id;

    return (
        <div className="table-row base">
            <div className="id-div">{personId}</div>
            <div>{person.name}</div>
            <div>{person.weight}</div>
            <div>{person.eyeColor}</div>
            <div>{person.location.name}</div>
        </div>
    );
}

export default PersonTableRow;
