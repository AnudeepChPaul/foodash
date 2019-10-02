import * as actionTypes from '../actions/list-actions';

const initialState = {
    thumbnailListData: [],
    sidebarListData: []
};

export const listState = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_THUMBNAIL_LIST_DATA:
            return {
                ...state,
                thumbnailListData: action.payload.listData.concat()
            };
        case actionTypes.SET_SIDEBAR_LIST_DATA:
            return {
                ...state,
                sidebarListData: action.payload.listData.concat()
            };
        default:
            return state;
    }
};
