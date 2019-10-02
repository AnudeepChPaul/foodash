/*
    FilteredThumbnailList class implementation
    by Anudeep Chandra Paul
*/

import React, {Component} from 'react';
import './FilteredThumbnailList.scss';
import SimpleThumbnailList from '../SimpleThumbnailList';
import HorizontalListFilter from '../../filter/HorizontalListFilter';

class FilteredThumbnailList extends Component {
    render = () => {
        return (
            <div className='FilteredThumbnailList'>
                <HorizontalListFilter/>
                <SimpleThumbnailList listData={this.props.listData}/>
            </div>
        );
    };
}

export default FilteredThumbnailList;
