import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                <div className='fa fa-more'></div>
                <span className='title'>Time line</span>
                <input
                    type='text'
                    className='searchInput'
                    placeholder='Search..' />
                <div className='fa fa-search searchIcon'></div>
            </div>
        )
    }
}
