import TableRow from "./TableRow";

function MovieList(props) {
    const numbers = props.movies;
    let listItems;
    if (numbers === undefined) {
        return (
            <div className="table-row base id-div">
                <div className="id-div">No data.</div>
            </div>
        );
    }
    if (!Array.isArray(numbers)) {
        //const movie = numbers[0];
        listItems = <TableRow movie={numbers} key={numbers.id}/>
    } else {
        listItems = numbers.map((movie) =>
            <TableRow movie={movie} key={movie.id}/>
        );
    }
    return (
        <
            div> {listItems}
        </div>
    );
}

export default MovieList;