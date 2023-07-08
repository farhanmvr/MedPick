import { Menu } from 'antd';
import vajiraLogo from '../assets/logo/vajira_logo.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/profile.svg';
import { ReactComponent as UsersIcon } from '../assets/icons/users.svg';
import { ReactComponent as DepartmentIcon } from '../assets/icons/departments.svg';
import { ReactComponent as IncidentIcon } from '../assets/icons/incidents.svg';
import { ReactComponent as ServiceReqIcon } from '../assets/icons/service_requests.svg';
import { ReactComponent as ReportIcon } from '../assets/icons/reports.svg';
import { ReactComponent as ManualsIcon } from '../assets/icons/manuals.svg';
import { ReactComponent as WarrantyStatusIcon } from '../assets/icons/warranty_status.svg';
import { ReactComponent as ContactIcon } from '../assets/icons/contact.svg';
import { ReactComponent as SignoutIcon } from '../assets/icons/signout.svg';
import styled from 'styled-components';
import SvgIcon from './SvgIcon';
import { useState } from 'react';

const Sidebar = () => {
  const [selectedKey, setSelectedKey] = useState('home');

  const getItem = (key, icon, fill = false) => {
    return {
      key,
      icon: (
        <SvgIcon
          icon={icon}
          color={
            selectedKey === key
              ? 'var(--color-white)'
              : 'var(--color-secondary)'
          }
          fill={fill}
        />
      ),
    };
  };

  const items = [
    getItem('home', <HomeIcon />),
    getItem('profile', <ProfileIcon />),
    getItem('users', <UsersIcon />),
    getItem('departments', <DepartmentIcon />, true),
    getItem('incidents', <IncidentIcon />, true),
    getItem('service_requests', <ServiceReqIcon />, true),
    getItem('reports', <ReportIcon />, true),
    getItem('manuals', <ManualsIcon />, true),
    getItem('warranty_status', <WarrantyStatusIcon />, true),
    getItem('contact', <ContactIcon />, true),
    getItem('signout', <SignoutIcon />, true),
  ];

  return (
    <SideBarContainer>
      <SidebarLogo>
        <img src={vajiraLogo} alt="Vajira Logo" />
      </SidebarLogo>
      <Menu
        onSelect={(e) => setSelectedKey(e?.key)}
        className="pt-3"
        defaultSelectedKeys={[selectedKey]}
        items={items}
      />
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  background: #f0f8ff;
  box-shadow: 4px 4px 8px -2px rgba(0, 79, 149, 0.25);
  padding: 44px 25px 0 25px;
  height: 100%;
  & .ant-menu-root {
    &.ant-menu {
      border-inline-end: none;
    }
    & .ant-menu-item-selected {
      background: var(--color-primary);
    }
    & li {
      display: flex;
      align-items: center;
      padding: 0;
      justify-content: center;
      width: 64px;
      height: 64px;
      margin: 0 auto 30px auto;
    }
  }
  & .ant-menu-light {
    background: transparent;
  }
  & .ant-menu-inline-collapsed {
    width: 100%;
  }
`;

const SidebarLogo = styled.div`
  margin-bottom: 50px;
  & img {
    margin: auto;
  }
`;

export default Sidebar;
