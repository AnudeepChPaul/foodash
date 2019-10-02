/*
    Sidebar class implementation
    by Anudeep Chandra Paul
*/

import React, {Component} from 'react';
import './Sidebar.scss';
import SimpleFilterList from '../list/sidebar/SimpleFilterList';

class Sidebar extends Component {
    static defaultProps = {
        listData: []
    };

    render = () => {
        return (
            <div className='Sidebar'>
                <SimpleFilterList listData={this.props.listData}/>
            </div>
        );
    };
}

export default Sidebar;
