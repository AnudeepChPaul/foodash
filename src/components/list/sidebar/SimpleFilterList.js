/*
	SimpleFilterList class implementation
	by Anudeep Chandra Paul
*/

import React, {Component} from 'react';
import ThumbnailFilterItem from './ThumbnailFilterItem';
import './SimpleFilterList.scss';

class SimpleFilterList extends Component {
    static defaultProps = {
        listData: []
    };

    render = () => {
        return (
            // <div className='SimpleFilterList ui vertical menu'>
            // 	{this.state.data.map((data, index) => (
            // 		<ThumbnailFilterItem {...data} key={index} />
            // 	))}
            // </div>
            <div className='SimpleFilterList ui middle aligned selection list'>
                {this.props.listData.map((data, index) => (
                    <ThumbnailFilterItem {...data} key={index}/>
                ))}
            </div>
        );
    };
}

export default SimpleFilterList;
