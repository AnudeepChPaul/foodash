/*
	HorizontalListFilter class implementation
	by Anudeep Chandra Paul
*/

import React, {Component} from 'react';
import './HorizontalListFilter.scss';

class HorizontalListFilter extends Component {
    static propTypes = {};
    static defaultProps = {};
    state = {};

    render = () => {
        return (
            <div className='HorizontalListFilter ui'>
                <div className='ui menu'>
                    <div className='header item'>Our Company</div>
                    <span className='item'>About Us</span>
                    <span className='item'>Jobs</span>
                    <span className='item active'>Locations</span>
                    <div className='right menu'>
                        <div className='item'>
                            <div className='ui transparent icon input'>
                                <input
                                    type='text'
                                    placeholder='Search users...'
                                />
                                <i className='search link icon'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    componentDidMount = () => {
    };
}

export default HorizontalListFilter;
