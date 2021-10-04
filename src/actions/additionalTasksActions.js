import {ADDITIONAL_SERVLET, BASE} from "../constants/backendConstants";
import {convert, options} from "../utils/xmlUtils";
import {SET_GENRE_COUNT, SET_LENGTH_COUNT, SET_SCREENWRITER_LIST} from "../constants/additionalActionsConsts";
import Notifications from "react-notification-system-redux";
import {serverException} from "../notifications/sendNotification";

export function getGenreCount(genre) {
    return (dispatch) => {
        const url = BASE + ADDITIONAL_SERVLET + "?genre=" + genre;
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
                console.log(response);
                const result = convert.xml2js(response, options);
                dispatch({
                    type: SET_GENRE_COUNT,
                    payload: result.countDTO.count
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

export function getLengthCount(length) {
    console.log("LENGTH = " + length);
    return (dispatch) => {
        const url = BASE + ADDITIONAL_SERVLET + "?length=" + length;
        console.log(url);
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
                console.log(response);
                const result = convert.xml2js(response, options);
                dispatch({
                    type: SET_LENGTH_COUNT,
                    payload: result.countDTO.count
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

export function getScreenWriterList(id) {
    return (dispatch) => {
        const url = BASE + ADDITIONAL_SERVLET + "?screenwriter=" + id;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/xml; charset=utf-8'
            },
        })
            .then(response => {
                console.log("STATUS " + response.status)
                if (!response.ok)
                    throw response;
                return response.text();
            })
            .then(response => {
                const result = convert.xml2js(response, options);
                dispatch({
                    type: SET_SCREENWRITER_LIST,
                    payload: result.personDTOList.persons.person
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