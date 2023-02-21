import React from 'react';
import './Header.css';
import logo from './Images/onlinelogomaker-022223-0135-2603-2000-transparent.png'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="" className='header_logo' />
            <div className='header_search'>
                <input type="text" className='header_searchInput' />
                {/* logo  */}
                <SearchIcon className='header_searchIcons'></SearchIcon>
            </div>
            <div className='header_nav'>
                <div className='header_navOption'>
                    <span className='headerOption_LineOne'>Hello Guest</span>
                    <span className='headerOption_Linetwo'>Sign In</span>
                </div>
                <div className='header_navOption'>
                    <span className='headerOption_LineOne'>Returns</span>
                    <span className='headerOption_Linetwo'>& orders</span>
                </div>
                <div className='header_navOption'>
                    <span className='headerOption_LineOne'>Your</span>
                    <span className='headerOption_Linetwo'>Prime</span>
                </div>
            </div>
        </div>
    )
}

export default Header