/*
    ThumbnailList class implementation
    by Anudeep Chandra Paul
*/

import React, {Component} from 'react';
import './ThumbnailListItem.scss';

class ThumbnailListItem extends Component {
    static defaultProps = {
        toggleQuickView: true
    };

    state = {
        quickView: false
    };

    onMouseEnterListItem = () => {
        !this.state.quickView &&
        this.setState({
            quickView: true
        });
    };

    onMouseLeave = () => {
        this.state.quickView &&
        this.setState({
            quickView: false
        });
    };

    render = () => {
        return (
            <div
                className='ui card ThumbnailListItem'
                onMouseEnter={this.onMouseEnterListItem}
                onMouseLeave={this.onMouseLeave}
            >
                <div
                    className='fluid image Thumbnail-List-Image'
                    style={{backgroundImage: `url(${this.props.url})`}}
                ></div>
                <div className='content'>
                    <i className='left floated like icon'></i>
                    <span className='header link'>{this.props.name}</span>
                    {/* <div className='meta'>
						<span className='date'>Joined in 2013</span>
					</div> */}
                    <div className='description'>{this.props.description}</div>
                </div>
                {this.state.quickView && (
                    <div className='extra content'>
                        <button className='center floated ui button'>
                            <i className='eye icon'></i>
                            Quick View
                        </button>
                    </div>
                )}
            </div>
        );
    };
}

export default ThumbnailListItem;
