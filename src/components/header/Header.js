/*
    Header class implementation
    by Anudeep Chandra Paul
*/

import React from 'react';
import './Header.scss';

const Header = props => {
    console.log('[Header] render')
    return (
        <header className='Header-Wrapper'>
            <h2 className='ui header'>
                <i className='user icon'></i>
                <div className='content'>
                    {props.title}
                    <div className='sub header'>{props.subHeader}</div>
                </div>
            </h2>
        </header>
    );
};

export default Header;
