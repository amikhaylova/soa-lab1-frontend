import {history} from "../components/App";
import {BASE, LOCATION_SERVLET} from "../constants/backendConstants";
import {convert, options, options1} from "../utils/xmlUtils";
import {SET_EDITED_LOCATION, SET_LOCATIONS} from "../constants/locationActionsConsts";
import Notifications from "react-notification-system-redux";
import {serverException} from "../notifications/sendNotification";


export function getSingleLocation(id) {
    return (dispatch) => {
        const url = BASE + LOCATION_SERVLET + "/" + id;
        fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/xml; charset=utf-8'
            },
        })
            .then(response => {
                if (!response.ok)
                    throw response;
                return response.text();
            })
            .then(response => {
                console.log(response);
                const result = convert.xml2js(response, options);
                const movie = result.locationDTOList.locations.location;
                dispatch({
                    type: SET_EDITED_LOCATION,
                    payload: movie
                });
            })
            .catch(error => {
                error.text().then(errorMessage => {
                    const convert = require('xml-js');
                    const result = convert.xml2js(errorMessage, options);
                    const msg = result.exceptionDTO.message;
                    dispatch(Notifications.error(serverException(msg)));
                })
            });
    }
}

export function getLocations() {
    return (dispatch) => {
        const url = BASE + LOCATION_SERVLET;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/xml; charset=utf-8'
            },
        })
            .then(response => {
                if (!response.ok)
                    throw response;
                return response.text();
            })
            .then(response => {
                console.log("RESPONSE = " + response);
                const convert = require('xml-js');
                const result = convert.xml2js(response, options);
                const locations = result.locationDTOList.locations.location;
                dispatch({
                    type: SET_LOCATIONS,
                    payload: locations
                });
            })
            .catch(error => {
                error.text().then(errorMessage => {
                    const convert = require('xml-js');
                    const result = convert.xml2js(errorMessage, options);
                    const msg = result.exceptionDTO.message;
                    dispatch(Notifications.error(serverException(msg)));
                })
            });
    }
}


function transferFormDataToCoordinatesDTO(form) {
    let result = {};
    result.id = form.id;
    result.x = form.x;
    result.y = form.y;
    result.name = form.name;
    return result;
}

export function updateLocation(movie, id) {
    console.log(movie);
    let xml = convert.js2xml(transferFormDataToCoordinatesDTO(movie), options1);
    console.log("XML = " + xml);
    return (dispatch) => {
        const url = BASE + LOCATION_SERVLET;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/xml; charset=utf-8'
            },
            body: "<locationDTOList><locations><location>" + xml + "</location></locations></locationDTOList>"
        })
            .then(response => {
                if (!response.ok) {
                    throw response;
                } else return response.text();
            })
            .then(response => {
                history.goBack();
            })
            .catch(error => {
                error.text().then(errorMessage => {
                    const convert = require('xml-js');
                    const result = convert.xml2js(errorMessage, options);
                    const msg = result.exceptionDTO.message;
                    dispatch(Notifications.error(serverException(msg)));
                })
            });
    }
}

export function createLocation(coordinates, id) {
    let xml = convert.js2xml(coordinates, options1);
    return (dispatch) => {
        const url = BASE + LOCATION_SERVLET;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/xml; charset=utf-8'
            },
            body: "<locationDTOList><locations><location>" + xml + "</location></locations></locationDTOList>"
        })
            .then(response => {
                if (!response.ok) {
                    throw response;
                } else return response.text();
            })
            .then(response => {
                history.push("/soa-lab1/edit/" + id);
                window.location.reload(false);
            })
            .catch(error => {
                error.text().then(errorMessage => {
                    const convert = require('xml-js');
                    const result = convert.xml2js(errorMessage, options);
                    const msg = result.exceptionDTO.message;
                    dispatch(Notifications.error(serverException(msg)));
                })
            });
    }
}

