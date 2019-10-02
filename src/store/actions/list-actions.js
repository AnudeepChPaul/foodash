import {getAvatarImages, getFoodImages} from '../../api';

export const SET_THUMBNAIL_LIST_DATA = 'SET/THUMBNAIL_LIST/DATA';
export const SET_SIDEBAR_LIST_DATA = 'SET/SIDEBAR_LIST/DATA';

const setThumbnailListData = data => {
    const copiedData = [];
    data.forEach(eachData => {
        copiedData.push({...eachData});
    });
    return {
        type: SET_THUMBNAIL_LIST_DATA,
        payload: {
            listData: data
        }
    };
};

const setSidebarlListData = data => {
    const copiedData = [];
    data.forEach(eachData => {
        copiedData.push({...eachData});
    });
    return {
        type: SET_SIDEBAR_LIST_DATA,
        payload: {
            listData: data
        }
    };
};

export const fetchThumbnailList = () => {
    return async dispatch =>
        getFoodImages().then(data => dispatch(setThumbnailListData(data)));
};

export const fetchSidebarList = () => {
    return async dispatch =>
        getAvatarImages().then(data => dispatch(setSidebarlListData(data)));
};
