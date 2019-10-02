/*
    Footer class implementation
    by Anudeep Chandra Paul
*/

import React, {Component} from 'react';
import './Footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => {
        return (
            <div className='Footer'>
                <span> Footer </span>
            </div>
        );
    };
}

export default Footer;
