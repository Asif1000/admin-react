import React from 'react';

const SideList = ({icon, title}) => {
  return (
    <li className='sidebar-list-item'>
        <a href="">
            <img src={icon} /> <span className='sidebar-list-title'>{title}</span>
        </a>
    </li>
  )
}

export default SideList;