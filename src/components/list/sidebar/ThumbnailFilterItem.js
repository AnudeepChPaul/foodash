/*
    ThumbnailFilterItem class implementation
    by Anudeep Chandra Paul
*/

import React from 'react';
import './ThumbnailFilterItem.scss';
import PropTypes from 'prop-types';

const ThumbnailFilterItem = props => {
    return (
        <div className='item'>
            <img className='ui avatar image' src={props.url} alt={props.name}/>
            <div className='content'>
                <div className='header'>{props.name}</div>
                {/* <div className='description'>{props.description}</div> */}
                <span>{props.description}</span>
            </div>
        </div>
    );
};

ThumbnailFilterItem.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

ThumbnailFilterItem.defaultProps = {
    description: 'null'
};

export default ThumbnailFilterItem;
