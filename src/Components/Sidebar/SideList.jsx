import React from 'react';
import { Link } from 'react-router-dom';

const SideList = ({icon, title, path}) => {
  return (
    <li className='sidebar-list-item'>
        <Link to={path}><img src={icon} /> <span className='sidebar-list-title'>{title}</span></Link>
    </li>
  )
}

export default SideList;