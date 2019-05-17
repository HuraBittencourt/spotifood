import './alert.scss'

import { Alert as AlertMessage, Button } from 'react-bootstrap';
import { compose, withHandlers, withProps } from 'recompose';

import React from 'react';
import { clearAlertNotification } from '../actions/alert';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { messageAlertError } from '../selectors/alert';

const componentClassName = 'alert';

const enhance = compose(
    connect(
        state => ({
            message: messageAlertError(state)
        }),
        dispatch => ({
            clearAlert: () => dispatch(clearAlertNotification())
        })
    ),
    withHandlers({
        clearAlertMessage: ({ clearAlert }) => () => {
            clearAlert();
        }
    })
)

const Alert = ({ message, clearAlertMessage }) => {
    return (
        <div className={`${componentClassName}--${message !== undefined ? 'show' : 'hide'}`}>
            <AlertMessage show={true} variant="danger">
                <h2>Ops!</h2>
                <p>
                    {message}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button variant="outline-success" onClick={clearAlertMessage}>
                        Close!
                    </Button>
                </div>
            </AlertMessage>
        </div>
    );
}

export default enhance(Alert);
