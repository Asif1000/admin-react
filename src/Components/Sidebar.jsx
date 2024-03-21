import React from 'react';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs';
import SideList from './Sidebar/SideList';

import MyFinderIcon from '../assets/images/logo.svg';
import DashboardIcon from '../assets/icons/dashboard-icon.svg';
import MyCommunityIcon from '../assets/icons/mycommunity.svg';
import AttractionIcon from '../assets/icons/attraction.svg';
import QuickIcon from '../assets/icons/quick.svg';
import StoreIcon from '../assets/icons/store.svg';
import EnquiryIcon from '../assets/icons/enquiry.svg';
import ReviewIcon from '../assets/icons/review.svg';
import RecommendIcon from '../assets/icons/recommendation.svg';

function Sidebar({openSidebarToggle, OpenSidebar}) {

    const listData = [
        {
          title: "Dashboard",
          icon: DashboardIcon,
        },
        {
          title: "My Community",
          icon: MyCommunityIcon,
        },
        {
          title: "Attraction",
          icon: AttractionIcon,
        },
        {
          title: "Quick",
          icon: QuickIcon,
        },
        {
          title: "Store",
          icon: StoreIcon,
        },
        {
          title: "Enquiry",
          icon: EnquiryIcon,
        },
        {
          title: "Review",
          icon: ReviewIcon,
        },
        {
          title: "Recommendation",
          icon: RecommendIcon,
        }
    ];

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src={MyFinderIcon} />
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            {listData.map((list) => (
                <SideList icon={list.icon} title={list.title} />
            ))}
        </ul>
    </aside>
  )
}

export default Sidebar