/*
	SimpleThumbnailList class implementation
	by Anudeep Chandra Paul
*/

import React, {Component} from 'react';
import ThumbnailListItem from './ThumbnailListItem';
import './SimpleThumbnailList.scss';

class SimpleThumbnailList extends Component {
    static defaultProps = {
        listData: []
    };

    render = () => {
        return (
            <div className='SimpleThumbnailList ui cards'>
                {this.props.listData.map((data, index) => (
                    <ThumbnailListItem {...data} key={index}/>
                ))}
            </div>
        );
    };

    // componentDidMount = () => {
    // 	getFoodImages().then(response => {
    // 		this.setState({
    // 			data: response.concat()
    // 		});
    // 	});
    // };
}

export default SimpleThumbnailList;
