import * as actionTypes from '../actions/app-actions';

const initialState = {
    status: 'INIT',
    title: null,
    subHeader: null
};

const appState = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_APP_AUTHENTICATION_STATUS:
            return {
                ...state,
                status: action.payload.status
            };
        case actionTypes.SET_APP_DATA:
            return {
                ...state,
                status: action.payload.status
            };
        // case actionTypes.ADD:
        // 	const newState = Object.assign({}, state);
        // 	newState.counter = state.counter + 1;
        // 	return newState;
        default:
            return state;
    }
};

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware][Logger]', action);
            const result = next(action);
            console.log('[Middleware] next state:', store.getState());
            return result;
        };
    };
};

export {appState, logger};
