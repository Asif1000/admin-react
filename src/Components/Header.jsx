import React from 'react';
import { BsJustify } from 'react-icons/bs';
 import Button from 'react-bootstrap/Button';
 import SearchIcon from '../assets/icons/Search.svg';
 import GroupIcon from '../assets/icons/Group.svg';
 import HowToListIcon from '../assets/icons/how-to-list.svg';
 import BellIcon from '../assets/icons/bell.svg';
 import BarIcon from '../assets/icons/bar.svg';
 import PlaceholderImage from '../assets/images/logo-sample.png';

const Header = ({OpenSidebar}) => {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            
        </div>
        <div className='header-center'>
            <Button variant="primary" className="menu-button me-4" type="button"><img src={SearchIcon} /> AI Dashboard</Button>
            <Button variant="primary" className="menu-button me-4" type="button"><img src={GroupIcon} /> Live Listing</Button>
            <Button variant="primary" className="menu-button me-4" type="button"><img src={HowToListIcon} /> How to list?</Button>
        </div>
        <div className='header-right'>
            <Button variant="primary" className="menu-button me-4" type="button"><img src={BellIcon} /></Button>
            <a className='logo-image me-4' href='javascript:void(0)'><img src={PlaceholderImage} /></a>
            <a className="bar-icon" href='javascript:void(0)'><img src={BarIcon} /></a>
        </div>
    </header>
  )
}

export default Header