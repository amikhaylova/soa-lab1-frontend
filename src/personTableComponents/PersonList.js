import PersonTableRow from "./PersonTableRow";

function PersonList(props) {
    const screenwriterList = props.screenwriterList;
    // console.log("SCREENWRITER LIST = " + screenwriterList)
    let listItems;
    if (screenwriterList === undefined) {
        return (
            <div className="table-row base id-div">
                <div className="id-div">No data.</div>
            </div>
        );
    }
    if (!Array.isArray(screenwriterList)) {
        console.log("NOT ARRAY")
        listItems = <PersonTableRow person={screenwriterList} key={screenwriterList.id}/>
    } else {
        listItems = screenwriterList.map((person) =>
            <PersonTableRow person={person} key={person.id}/>
        );
    }
    return (
        <div>{listItems}</div>
    );
}

export default PersonList;