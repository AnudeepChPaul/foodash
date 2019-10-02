import {appState} from './app-state';
import {listState} from './list-state';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const rootReducer = combineReducers({
        applicationState: appState,
        listState: listState
    }),
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunk,
            createLogger({
                collapsed: true,
                level: 'info'
            })
        )
    )
);

export default store;
