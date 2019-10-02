export const SET_APP_AUTHENTICATION_STATUS = 'SET/APP/AUTHENTICATION_STATUS';
export const SET_APP_DATA = 'SET/APP/DATA';
export const setAuthenticationStatus = status => ({
    type: SET_APP_AUTHENTICATION_STATUS,
    payload: {
        status: status
    }
});
export const setApplicationData = data => ({
    type: SET_APP_DATA,
    payload: {...data}
});

export const validateAuthToken = token => {
    return async dispatch => {
        setTimeout(() => {
            dispatch(setAuthenticationStatus('AUTH'));
        }, 2000);
    };
};

export const fetchApplicationData = () => {
    return async dispatch => {
        return setTimeout(() => {
            dispatch(
                setApplicationData({
                    title: 'Application Title',
                    subHeader: 'Application Sub-Header'
                })
            );
        }, 2000);
    };
};
