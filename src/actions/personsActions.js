import {history} from "../components/App";
import {BASE, PERSON_SERVLET} from "../constants/backendConstants";
import {convert, options, options1} from "../utils/xmlUtils";
import {SET_EDITED_PERSON, SET_PERSONS} from "../constants/personActionsConsts";
import Notifications from "react-notification-system-redux";
import {serverException} from "../notifications/sendNotification";


export function getSinglePerson(id) {
    return (dispatch) => {
        const url = BASE + PERSON_SERVLET + "/" + id;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/xml; charset=utf-8'
            },
        })
            .then(response => {
                console.log("STATUS " + response.status);
                if (!response.ok)
                    throw response;
                return response.text();
            })
            .then(response => {
                console.log(response);
                const result = convert.xml2js(response, options);
                const movie = result.personDTOList.persons.person;
                dispatch({
                    type: SET_EDITED_PERSON,
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

export function getPerson() {
    return (dispatch) => {
        const url = BASE + PERSON_SERVLET;
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
                const coordinates = result.personDTOList.persons.person;
                dispatch({
                    type: SET_PERSONS,
                    payload: coordinates
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
    result.name = form.name;
    result.weight = form.weight;
    result.eyeColor = form.eyeColor;
    result.location = {};
    result.location.id = form.locations;
    return result;
}

export function updatePerson(movie, id) {
    let xml = convert.js2xml(transferFormDataToCoordinatesDTO(movie), options1);
    console.log("XML = " + xml);
    return (dispatch) => {
        const url = BASE + PERSON_SERVLET;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/xml; charset=utf-8'
            },
            body: "<personDTOList><persons><person>" + xml + "</person></persons></personDTOList>"
        })
            .then(response => {
                if (!response.ok)
                    throw response;
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

export function createPerson(coordinates, id) {
    let xml = convert.js2xml(transferFormDataToCoordinatesDTO(coordinates), options1);
    console.log("XML" + xml);
    return (dispatch) => {
        const url = BASE + PERSON_SERVLET;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/xml; charset=utf-8'
            },
            body: "<personDTOList><persons><person>" + xml + "</person></persons></personDTOList>"
        })
            .then(response => {
                if (!response.ok)
                    throw response;
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